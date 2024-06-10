import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import "./index.css";
import { GlobalStyles } from "./news-homepage-main/styles/gloabal";
import RoutePage from "./interactive-rating-component-main/components/RoutePage";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <GlobalStyles />
    <RoutePage />
  </BrowserRouter>
);
