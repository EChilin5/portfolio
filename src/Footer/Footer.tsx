import React, { useEffect, useState } from "react";
import edgar from "../image/Edgar.jpeg";
import "./Footer.scss";

const Footer = () => {
  const [laTime, setLaTime] = useState<string>("");

  const openEmail = () => {
    window.open(
      "mailto:eachilin@gmail.com?subject=Subject&body=Body%20goes%20here"
    );
  };

  const linkedin = "https://www.linkedin.com/in/edgar-c/";
  const resume =
    "https://drive.google.com/file/d/1cFr7-XmffshG0JXaFawLZIUjbvWUqSCm/view?usp=sharing";
  const Github = "https://github.com/EChilin5";
  const openLink = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    // Function to get the current time in Los Angeles
    const getLATime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const time = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setLaTime(time);
    };

    // Update the time every second
    const intervalId = setInterval(getLATime, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-header">
        <div className="footer-profile">
          <img src={edgar} alt="edgar" />
        </div>
        <div className="footer-header-text">Let's work together</div>
      </div>
      <hr className="footer-hr"></hr>
      <div className="footer-header-sub">
        <div className="footer-outreach" onClick={() => openEmail()}>
          eachilin@gmail.com
        </div>
        <div className="footer-outreach">
          <a className="footer-call" href="tel:323-807-4832">
            323-807-4832
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="version">
          <div>
            <div>Version</div>
            <div>2024 &copy; Edition</div>
          </div>
          {/* <div>
            <div>Local Time</div>
            <div>{laTime} PST</div>
          </div> */}
        </div>
        <div className="connections">
          <div>Connect</div>
          <div className="connections-sub">
            <div
              className="connections-sub-item"
              onClick={() => openLink(linkedin)}
            >
              Linkedin
            </div>
            <div
              className="connections-sub-item"
              onClick={() => openLink(Github)}
            >
              Github
            </div>
            <div
              className="connections-sub-item"
              onClick={() => openLink(resume)}
            >
              Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
