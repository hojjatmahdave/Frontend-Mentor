import React from "react";
import Body from "../components/body";
import Nav from "../components/nav";
import { AppStyle } from "../styles/app-style";

const App = () => {
  return (
    <AppStyle>
      <Nav />
      <Body />
    </AppStyle>
  );
};

export default App;
