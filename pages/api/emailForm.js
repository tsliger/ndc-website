import * as Yup from "yup";

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

// Sends email to the proper account
const sendEmail = (data) => {
  console.log(data);
};

// Validates the data for a second time on the server,
// prevents user from sending unvalidated data to the account
async function validateData(data) {
  contactSchema
    .validate(data)
    .then((res) => {
      sendEmail(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Handles the incoming requests
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const data = JSON.parse(req.body);
    validateData(data);
  }
}
