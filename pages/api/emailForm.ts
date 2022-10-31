import * as Yup from "yup";
import axios from "axios";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Sends email to the proper account
const sendEmail = (res, data) => {
  // end if no captcha sent
  if (data.captcha === null)
    return res.status(400).send({ error: "captcha is not valid" });
  // Check if recaptcha is real
  axios
    .post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${data.captcha}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      }
    )
    .then((resp) => {
      sendMessage(resp);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ error: "failed to validate data with reCAPTCHA" });
    });

  const sendMessage = (resp) => {
    const { success } = resp.data;
    const { email, firstName, lastName, phoneNumber, description } = data;

    // Do not go through if recaptcha failed
    if (!success)
      return res.status(400).send({ error: "captcha is not valid" });

    const msg = {
      to: `advantage@anchorsystems.tech`,
      from: "advantage@anchorsystems.tech", // Use the email address or domain you verified above
      subject: `Contact Request from ${firstName + " " + lastName}`,
      text: `${
        firstName + " " + lastName
      } wrote:\n\n${description} \n\n\n\nContact\n${email}\n${phoneNumber}
      `,
    };

    // Send the email
    sgMail.send(msg).then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
    res.status(200).send({ success: "sent contact email to user" });
  };
};

// Handles the incoming requests
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const data = JSON.parse(req.body.data);

    contactSchema
      .validate(data)
      .then(() => {
        sendEmail(res, data);
      })
      .catch((err) => {
        res.status(400).send({ error: "failed to validate data sent" });
      });
  }
}

// Same validation schema used on the frontend
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
