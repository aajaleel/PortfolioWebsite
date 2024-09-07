import React from "react";
import portfolioPhoto from "../../assets/images/mail.png";
import "./FeelingProud.css";

function FeelingProud(props) {
  return (
    <div className="profile-image-wrapper">
      <img src={portfolioPhoto} alt="portfolio-profile" className="profile-image" />
    </div>
  );
}

export default FeelingProud;
