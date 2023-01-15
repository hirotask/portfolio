import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { HomePage } from './components/pages/HomePage';
import { WorksPage } from './components/pages/WorksPage';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/works' component={WorksPage} />
          <Route path='/contact' component={ContactPage} />
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
    font-family: "BIZ UDゴシック", sans-serif;
    font-size: 18px;
    line-height: 2.0;
    color: #424242;
  }
`;