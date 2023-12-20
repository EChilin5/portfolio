import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [userEmail, setUserEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const publicKey = process.env.REACT_APP_Email_JS_Public_Key;
  const templateKey = process.env.REACT_APP_Email_JS_Template_Key;
  const serviceId = process.env.REACT_APP_Email_JS_Service_ID;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    submitEmail();
  };

  const nameChangeHandler = (event) => {
    setUserEmail((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const emailChangeHandler = (event) => {
    setUserEmail((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const subjectChangeHandler = (event) => {
    setUserEmail((prevState) => {
      return { ...prevState, subject: event.target.value };
    });
  };

  const messageChangeHandler = (event) => {
    setUserEmail((prevState) => {
      return { ...prevState, message: event.target.value };
    });
  };

  const submitEmail = () => {
    let test = {
      subject: userEmail.subject,
      from_name: userEmail.name,
      message: userEmail.message,
      reply_to: userEmail.email,
    };

    try {
      emailjs.send(serviceId, templateKey, test, publicKey).then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
          // console.log(test.message);
        },
        function (error) {
          // console.log("FAILED...", error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-form-template">
      <h3>Let's work Together</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Control
            type="text"
            placeholder="Name"
            required
            value={userEmail.name}
            onChange={nameChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userEmail.email}
            onChange={emailChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={userEmail.subject}
            onChange={subjectChangeHandler}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom04">
          <Form.Control
            as="textarea"
            placeholder="Enter Message"
            rows={3}
            value={userEmail.message}
            onChange={messageChangeHandler}
            required
          />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default ContactForm;
