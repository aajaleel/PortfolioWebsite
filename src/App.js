import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { TooltipProvider } from "react-tooltip";
import Main from "./containers/Main";
import "./App.css";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <TooltipProvider>
          <Main theme={themes[theme]} setTheme={setTheme} />
        </TooltipProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
