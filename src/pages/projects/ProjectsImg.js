import React from "react";
import image from "../../assets/images/ellee.webp";

export default function ProjectsImg(props) {
  return (
    <div style={{ marginTop: "40px" }}>
      <img
        src={image}
        alt="Presentation"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
    </div>
  );
}
