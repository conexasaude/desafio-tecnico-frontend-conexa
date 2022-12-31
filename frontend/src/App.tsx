import React from "react";
import Router from "./routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import Global from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Router />
    </ThemeProvider>
  );
}

export default App;
