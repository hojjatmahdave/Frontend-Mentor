import React from "react";
import { FooterInfoStyles } from "../../styles/footer/footer-info-styles";

const FooterInfo = () => {
  return (
    <FooterInfoStyles>
      <div>
        <h4>Trustwave</h4>
        <p>Protected by Trustwave. Secure 128-bit SSL Encrypted.</p>
      </div>
      <p>© Ezetop 2023. All rights reserved.</p>
    </FooterInfoStyles>
  );
};

export default FooterInfo;
