import React from "react";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <main className="experience-container experience-cards">
          {props.sections["experiences"].map((experience, index) => {
            return (
              <a
                href={experience.link} // Link here
                target="_blank"
                rel="noopener noreferrer"
                key={"experience-" + index}
                className="experience-card-link"
              >
                <ExperienceCard
                  key={"experience-" + index}
                  experience={experience}
                  theme={theme}
                />
              </a>
            );
          })}
        </main>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
