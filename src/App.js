import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { AboutPage } from "./components/pages/AboutPage";
import { WorksPage } from "./components/pages/WorksPage";
import { ContactPage } from "./components/pages/ContactPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/portfolio/" component={HomePage} />
          <Route path="/portfolio/about" component={AboutPage} />
          <Route path="/portfolio/works" component={WorksPage} />
          <Route path="/portfolio/contact" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f1f1f1;
  }

  html {
    font-family: "BIZ UDゴシック",sans-serif;
    font-size: 18px;
    line-height: 2.0;
    color: #424242;
  }
`;
