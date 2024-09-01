import React from "react";
import { socialMediaLinks } from "../../portfolio";
import MailIconPNG from "../../assets/images/mail.png";
import MailIconGIF from "../../assets/images/mail.gif";
import "./SocialMedia.css";

export default function socialMedia(props) {
  return (
    <div
      className={`${
        props.page === "home" ? "social-media-div" : "contact-social-media-div"
      }`}
    >
      <a
        href={socialMediaLinks.github}
        className="social-icon github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="github-icon"
          width="45px"
          height="45px"
          viewBox="0 0 300 300"
        >
          <path
            id="body"
            d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
            c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
            C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
            c-5,4.7-8.1,11.1-8.6,18"
          />
          <path
            id="arm"
            d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
            c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8"
          />
        </svg>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="social-icon linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="linkedin-icon feather feather-linkedin"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="social-icon google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={MailIconPNG}
          className="mail-img google-icon"
          alt="mail-icon-png"
        />
        <img
          src={MailIconGIF}
          className="mail-gif google-icon"
          alt="mail-icon-gif"
        />
      </a>
      <a
        href={`tel:+6473258322`} // Replace with your actual phone number
        className="social-icon phone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="phone-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-2.71 19.51 19.51 0 0 1-6-6 19.78 19.78 0 0 1-2.71-8.63A2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72 12.34 12.34 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45 12.34 12.34 0 0 0 2.81.7 2 2 0 0 1 1.72 2z"></path>
        </svg>
      </a>
    </div>
  );
}
