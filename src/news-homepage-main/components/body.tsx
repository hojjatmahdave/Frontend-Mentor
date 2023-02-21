import React from "react";
import { BodyStyle, LogoImg, ReadMore } from "../styles/body-style";
import bodyLogo from "../assets/images/image-web-3-desktop.jpg";
import Cards from "./body/cards";
import New from "./body/new";

const Body = () => {
  return (
    <BodyStyle>
      <LogoImg src={bodyLogo} alt="" />
      <New />
      <h1>The Bright Future of Web 3.0?</h1>
      <ReadMore>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button> Read more</button>
      </ReadMore>
      <Cards />
    </BodyStyle>
  );
};

export default Body;
