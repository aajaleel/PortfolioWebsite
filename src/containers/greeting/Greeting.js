import React from "react";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { style } from "glamor";
import Typewriter from "typewriter-effect";
import FeelingProud from "./FeelingProud";
import WaveHand from "../../assets/images/waving-hand.png";
import "./Greeting.css";

export default function Greeting(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    padding: "15px 30px !important",
    letterSpacing: "0.125rem",
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const typewriterStrings = [
    `<span style="color: ${theme.accentColor}">${greeting.subTitle1}</span>`,
    `<span style="color: ${theme.accentColor}">${greeting.subTitle2}</span>`,
    `<span style="color: ${theme.accentColor}">${greeting.subTitle3}</span>`,
    `<span style="color: ${theme.accentColor}">${greeting.subTitle4}</span>`,
  ];

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="greeting-text-container">
              <h1 className="greeting-text">
                {greeting.title}
                <img
                  className="greeting-hand-wave"
                  src={WaveHand}
                  alt="waving-hand"
                />
                , {greeting.title2}
              </h1>
              <div
                className="greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span className="greeting-text-static">I'm a </span>
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    cursor: "_",
                    wrapperClassName: "typewriter-wrapper",  // To apply styles if needed
                  }}
                />
              </div>
              {greeting?.resumeLink && (
                <div className="portfolio-repo-btn-div">
                  <a
                    {...styles}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={greeting.resumeLink}
                  >
                    Resume
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
