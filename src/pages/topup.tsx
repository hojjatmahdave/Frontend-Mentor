import React from "react";
import { TopupStyles } from "../styles/topup/topup-styles";
import { Nav } from "../components/navbar/nav";
import { FaAsterisk } from "react-icons/fa";
import { PhoneNumber } from "../components/phone-number/phone-number";
import "react-phone-number-input/style.css";
import { Trustpilot } from "../components/trustpilot/trustpilot";
import { HelpBtn } from "../components/help-btn/help-btn";
import Footer from "../components/footer/footer";
export const Topup = () => {
  return (
    <TopupStyles>
      <Nav />
      <FaAsterisk />
      <PhoneNumber />
      <Trustpilot />
      <HelpBtn />
      <Footer />
    </TopupStyles>
  );
};
