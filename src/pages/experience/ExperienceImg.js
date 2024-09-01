import React from "react";

export default function ExperienceImg(props) {
  return (
    <div className="experience-video-container">
      <iframe
        style={{ marginTop: "40px" }} /* Add this line to create space above the video */
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/1gWvLHRY2o0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
