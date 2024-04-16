import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from "./Styles/Theme.js";
import reportWebVitals from './reportWebVitals';
import "./Styles/Global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme = {theme}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
