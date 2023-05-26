import React from "react";
import { FirstSectionStyles } from "../../styles/main/first-section/first-section-style";
import { PhoneNumber } from "../phone-number/phone-number";
import logo from "../../assets/logo-white.svg";
import stars from "../../assets/stars-5.svg";
export const FirstSection = () => {
  return (
    <FirstSectionStyles>
      <div>
        <div>
          <h2>The fastest way to send mobile top-up worldwide</h2>
          <p>
            99% of mobile recharges sent online with Ding arrive in 3 seconds.
          </p>
        </div>
        <PhoneNumber />
      </div>
      <div>
        <img src={logo} alt="#" />
        <img src={stars} alt="#" />
      </div>
      <span>
        <p>4.6 Rated Excellent based on 13,805 reviews</p>
      </span>
    </FirstSectionStyles>
  );
};
