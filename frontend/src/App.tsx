import React from "react";
import Router from "./routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import Global from "./styles/global";
import { Header } from "./components/header/header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <div>
        <Header />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
