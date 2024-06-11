import React, { useState } from "react";
import Body from "../components/body";
import Nav from "../components/nav";
import { AppStyle } from "../styles/app-style";

const App = () => {
  const [background, setBackground] = useState({ opacity: 1 });
  const handelsetBackground = (value: any) => {
    setBackground(value);
  };
  return (
    <AppStyle>
      <Nav Background={handelsetBackground} />
      <Body background={background} />
    </AppStyle>
  );
};

export default App;
