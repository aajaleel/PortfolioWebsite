import React from "react";
import WORKImg from "./Work.JPG"; // Import your JPG image

export default function EducationImg(props) {
  return (
    <img 
      src={WORKImg} 
      alt="Education" 
      style={{ maxWidth: "100%", height: "auto", borderRadius: "15px" }} 
    />
  );
}
