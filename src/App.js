import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Shadows+Into+Light&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
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
    background-color: #f5f5f5;
  }
  
  html {
    font-family: 'Shadows Into Light', sans-serif;
    font-size: 16px;
    line-height: 2.0;
    color: #424242;
  }
`;
