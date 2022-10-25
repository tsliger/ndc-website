import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Navlinks } from "./Navbar";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { HiOutlinePhone, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";


// Form validation for the contact form
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
});

// Contact form for the footer
const ContactForm = () => {
  const [currentError, setError] = useState("");
  const _reCaptchaRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      description: "",
    },
    onSubmit: (values) => {
      async function postData() {
        // Post to backend
        let res = await fetch("/api/emailForm", {
          method: "POST",
          body: JSON.stringify(values),
        });
      }
      postData();
    },
    validationSchema: contactSchema,
  });

  // Sets the error message when there are new/changing error states
  useEffect(() => {
    const keys = Object.keys(formik.errors);
    setError(formik.errors[keys[0]]);
  }, [formik.errors]);

  return (
    <div className="w-[48rem] z-50 h-full">
      <div className="flex">
        <h1 className="font-['Ethnocentric'] text-lg md:text-2xl mb-6 flex-grow">
          CONTACT
        </h1>
        <p className="px-4 text-red-500 text-sm md:text-md uppercase text-center">{currentError}</p>
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
                  onChange={formik.handleChange}
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
                  onChange={formik.handleChange}
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </InputGroup>
            <button
              type="submit"
              className="w-24 md:w-32 rounded-sm bg-ndcBlue text-base md:text-xl py-1 md:py-2 font-semibold active:scale-95 transition-all"
            >
              Submit
            </button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

// Defines the footer layout
export default function Footer() {
  return (
    <div className="min-h-[585px] flex p-8 flex-col lg:flex-row  lg:items-start overflow-hidden">
      <div className="flex-grow">
        <div className="overflow-hidden h-24 flex  items-center">
          <div className="w-56 md:w-72">
            <Image
              src={"/ndc-logo-white.png"}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              className="-translate-x-4"
              alt={"ndc logo"}
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col lg:flex-row">
          <div>
            <h1 className="font-['Ethnocentric'] text-lg md:text-2xl">Explore</h1>
            <ul className="footerNavList">
              <Navlinks />
            </ul>
          </div>
          <div className="relative lg:left-32 space-y-8 mt-8 lg:mt-0">
            <h1 className="font-['Ethnocentric'] text-lg md:text-2xl">Connect</h1>
            <BsFacebook style={{ marginTop: 25 }} size={32} />
            <BsTwitter style={{ marginTop: 25 }} size={32} />
            <BsLinkedin style={{ marginTop: 25 }} size={32} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-end mt-16 lg:mt-0 ">
        <ContactForm />
      </div>
    </div>
  );
}
