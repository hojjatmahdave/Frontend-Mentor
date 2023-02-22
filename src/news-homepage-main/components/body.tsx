import React from "react";
import {
  BodyStyle,
  Flex,
  Gaming,
  ImageCard,
  Laptops,
  LogoImg,
  Pcs,
  ReadMore,
} from "../styles/body-style";
import bodyLogo from "../assets/images/image-web-3-desktop.jpg";
// import Cards from "./body/cards";

import pcs from "../assets/images/image-retro-pcs.jpg";
import laptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
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

      <Pcs>
        <Flex>
          <ImageCard src={pcs} alt="" />
          <div>
            <h1>01</h1>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </Flex>
      </Pcs>
      <Laptops>
        <Flex>
          <ImageCard src={laptops} alt="" />

          <div>
            <h1>02</h1>
            <h3>Top 10 Laptops of 2023</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </Flex>
      </Laptops>
      <Gaming>
        <Flex>
          <ImageCard src={gaming} alt="" />
          <div>
            <h1>03</h1>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </Flex>
      </Gaming>
    </BodyStyle>
  );
};

export default Body;
