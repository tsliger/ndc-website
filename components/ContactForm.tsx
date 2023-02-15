import React, { useEffect, useState, useRef } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { HiOutlinePhone, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { useFormik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha")) as any;
import axios from "axios";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name Too Short")
    .max(50, "First Name Too Long")
    .required("First Name Required"),
  lastName: Yup.string()
    .min(2, "Last Name Too Short")
    .max(50, "Last Name Too Long")
    .required("Last Name Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number Required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
  description: Yup.string()
    .min(25, "Description needs to be longer")
    .max(500, "Description needs to be shorter")
    .required("Description Required"),
  captcha: Yup.string().required("captcha required"),
});

// Contact form for the footer
const ContactForm = () => {
  const [currentError, setError] = useState("");
  const _reCaptchaRef = useRef(null);
  const [recaptchaNeeded, setRecaptcha] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      description: "",
      captcha: "",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validationSchema: contactSchema,
  });

  const submitForm = (values) => {
    // Post to backend
    axios
      .post("/api/emailForm", {
        data: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((val) => {
        alert("Sent email for your contact request.");
        _reCaptchaRef.current.reset();
        formik.resetForm();
      })
      .catch((e) => {
        console.log(e);
        formik.resetForm();
      });
  };

  // Sets the error message when there are new/changing error states
  useEffect(() => {
    const keys = Object.keys(formik.errors);
    setError(formik.errors[keys[0]]);
  }, [formik.errors]);

  const handleCaptchaChange = (value) => {
    if (!value) {
      return;
    }

    formik.values.captcha = value;
  };

  const processChange = (elem) => {
    formik.handleChange(elem);
    setRecaptcha(true);
  };

  return (
    <div className="w-[48rem] z-50 h-full">
      <div className="flex">
        <h1 className="font-['Ethnocentric'] text-lg md:text-xl mb-6 flex-grow">
          CONTACT
        </h1>
        <p className="px-4 text-red-500 text-sm md:text-md uppercase text-center">
          {currentError}
        </p>
      </div>
      <div className="w-full h-fit flex flex-col  ">
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={16}>
            <div className="flex">
              <InputGroup width={"50%"} pr={6}>
                <InputLeftElement
                  pointerEvents="none"
                  height={"100%"}
                  children={
                    <div className="flex justify-center items-center pl-4">
                      <HiOutlineUser size={16} />
                    </div>
                  }
                />
                <Input
                  width={"100%"}
                  pl="3rem"
                  className="bg-white/10 p-4 text-sm md:text-base"
                  placeholder="First Name"
                  id="firstName"
                  onChange={processChange}
                  value={formik.values.firstName}
                />
              </InputGroup>
              <InputGroup width={"50%"} pl={6}>
                <InputLeftElement
                  pointerEvents="none"
                  height={"100%"}
                  pl={6}
                  children={
                    <div className="flex justify-center items-center pl-4">
                      <HiOutlineUser size={16} />
                    </div>
                  }
                />
                <Input
                  width={"100%"}
                  pl="3rem"
                  className="bg-white/10 p-4 text-sm md:text-base"
                  placeholder="Last Name"
                  id="lastName"
                  onChange={processChange}
                  value={formik.values.lastName}
                />
              </InputGroup>
            </div>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                height={"100%"}
                children={
                  <div className="flex justify-center items-center pl-4">
                    <HiOutlinePhone size={16} />
                  </div>
                }
              />
              <Input
                width={"100%"}
                type="tel"
                pl="3rem"
                className="bg-white/10 p-4 text-sm md:text-base"
                placeholder="Phone Number"
                id="phoneNumber"
                onChange={processChange}
                value={formik.values.phoneNumber}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                height={"100%"}
                children={
                  <div className="flex justify-center items-center pl-4">
                    <HiOutlineMail size={16} />
                  </div>
                }
              />
              <Input
                width={"100%"}
                type="email"
                pl="3rem"
                className="bg-white/10 p-4 text-sm md:text-base"
                placeholder="Email"
                id="email"
                onChange={processChange}
                value={formik.values.email}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                pt={20}
                children={
                  <div className="flex  items-start pl-4">
                    <HiOutlineMail size={16} />
                  </div>
                }
              />
              <Textarea
                width={"100%"}
                pl="3rem"
                className="bg-white/10 p-4 text-sm md:text-base"
                minHeight={100}
                resize={"none"}
                id="description"
                placeholder="Let us know how we can help..."
                onChange={processChange}
                value={formik.values.description}
              />
            </InputGroup>
            {recaptchaNeeded && (
              <ReCAPTCHA
                sitekey={"6LdsJ8siAAAAANsR96YeWDkCTUYtYdBksmh5pgFK"}
                onChange={handleCaptchaChange}
                ref={_reCaptchaRef}
                id="captcha"
                theme="dark"
              />
            )}
            <button type="submit" className="std-button">
              Submit
            </button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
