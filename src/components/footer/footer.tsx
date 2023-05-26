import React from "react";
import { FooterStyles } from "../../styles/footer/footer";

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <a href="#">
          <h4>ding</h4>
        </a>
        <a href="#">
          <p>© Ezetop 2023. All rights reserved.</p>
        </a>
      </div>
      <div>
        <a href="#">
          <p>Privacy notice</p>
        </a>
        <a href="#">
          <p>Friends and Family Privacy Notice</p>
        </a>
        <a href="#">
          <p>Terms & conditions</p>
        </a>
        <a href="#">
          <p>Cookies</p>
        </a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
