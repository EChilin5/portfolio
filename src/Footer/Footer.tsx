import React, { useEffect, useState } from 'react'
import edgar from "../image/Edgar.jpeg"
import "./Footer.scss"

const Footer = () => {

    const [laTime, setLaTime] = useState<string>("");

    useEffect(() => {
      // Function to get the current time in Los Angeles
      const getLATime = () => {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
        setLaTime(time);
      };
  
      // Update the time every second
      const intervalId = setInterval(getLATime, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className='footer-container'>
        <div className='footer-header'>
            <div className='footer-profile'><img src={edgar} alt="edgar"/></div>
            <div className='footer-header-text'>Let's work together</div>
        </div>
        <hr className='footer-hr'></hr>
        <div className='footer-header-sub'>
                    <div className='footer-outreach'>eachilin@gmail.com</div>
        <div className='footer-outreach'>323-807-****</div>
        </div>
        <div className='footer-bottom'>
            <div className='version'>
                <div>
                    <div>Version</div>
                    <div>2024  &copy; Edition</div>
                </div>
                <div>
                    <div>Local Time</div>
                    <div>{laTime}</div>
                </div>
            </div>
            <div className='connections'>
                <div>
                    Connect
                </div>
                <div className='connections-sub'>
                    <div>Linkedin</div>
                    <div>Github</div>
                    <div>Resume</div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer