import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import { contactPageData, greeting } from "../../portfolio.js"; // Import greeting
import { style } from "glamor"; // Import style for the button
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;

export default function Contact(props) {
  const theme = props.theme;

  const buttonStyles = style({
    backgroundColor: `${theme.accentBright}`,
    padding: "15px 30px !important",
    letterSpacing: "0.125rem",
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia page="contact" />
              {/* Add the resume button here */}
              {greeting?.resumeLink && (
                <div className="portfolio-repo-btn-div">
                  <a
                    {...buttonStyles}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={greeting.resumeLink}
                  >
                    Résumé
                  </a>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}
