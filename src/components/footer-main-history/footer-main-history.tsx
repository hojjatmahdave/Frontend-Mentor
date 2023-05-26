import React from "react";
import { FooterMainHistoryStyles } from "../../styles/footer-main-history/footer-main-history-styles";
import { Footerlinks } from "./footer-links";
import FooterInfo from "./footer-info";

export const Footer = () => {
  return (
    <FooterMainHistoryStyles>
      <Footerlinks />
      <FooterInfo />
    </FooterMainHistoryStyles>
  );
};
