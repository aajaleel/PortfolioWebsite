import React from "react";
import design from "../../assets/images/Stage.webp"; // Replace with the correct path to your image

export default function DesignImg() {
  return (
    <div>
      <img
        src={design}
        alt="Cloud Infrastructure"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
    </div>
  );
}
