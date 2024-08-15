import React from "react";
import "./ContactComponent.css";
import email from "../image/email.png";
import address from "../image/address.png";
// import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";

const ContactComponent = () => {
  // const formRef = useRef();

  // const [done, setdone] = useState(false);

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("hello");
  //   emailjs
  //     .sendForm(
  //       process.env.Service_KEY || '',
  //       process.env.Template_Key || '',
  //       formRef.current || '',
  //       process.env.Public_Key
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setdone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              eachilin@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Los Angeles, CA
            </div>
          </div>
        </div>
        <div className="c-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
