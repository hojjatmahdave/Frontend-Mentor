import React from "react";
import { SecondeSectionStyle } from "../../styles/main/second-section/second-section-style";
import { Cards } from "./second-section-components/cards";
import { Btns } from "./second-section-components/btns";
import CentralNorthAmerica from "../../assets/Central-North_America.webp";
import stars from "../../assets/star-rating-45.svg";
import { CompanyIcons } from "./second-section-components/company-icons";
export const SecondeSection = () => {
  return (
    <SecondeSectionStyle>
      <Cards />
      <h1>Send a little smile </h1>
      <h2>from Dallas to San Salvador</h2>
      <Btns />
      <h3>
        “It’s an absolutely incredible service where we can top up our families
        and friends’ mobile phones, when they live in remote parts of the
        world.”
      </h3>
      <img src={CentralNorthAmerica} alt="#" />
      <h3>
        <span>María- </span> Finds it easy to recharge her mother's number.
      </h3>
      <img src={stars} alt="#" />
      <CompanyIcons />
    </SecondeSectionStyle>
  );
};
