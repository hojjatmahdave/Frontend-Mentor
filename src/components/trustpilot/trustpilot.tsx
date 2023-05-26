import React from "react";
import { TrustpilotStyles } from "../../styles/trustpilot/trustpilot-styels";
import logo from "../../assets/logo-white.svg";
import stars from "../../assets/stars-5.svg";
import globe from "../../assets/globe.svg";

export const Trustpilot = () => {
  return (
    <TrustpilotStyles>
      <p>The fastest way to send mobile recharge worldwide</p>
      <p>
        Ding delivers 99% of phone top-ups in under 3 seconds. Keeping in touch
        has never been easier or more secure.{" "}
      </p>
      <div>
        <img src={logo} alt="#" />
        <img src={stars} alt="#" />
      </div>
      <p>4.6 Rated Excellent based on 13,805 reviews</p>
      <img src={globe} alt="#" />
    </TrustpilotStyles>
  );
};
