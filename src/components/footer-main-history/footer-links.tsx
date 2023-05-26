import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaAsterisk } from "react-icons/fa";
import { FooterLinksStyles } from "../../styles/footer/footer-links-styles";

export const Footerlinks = () => {
  return (
    <FooterLinksStyles>
      {" "}
      <div>
        <a href="#">
          <h4>ding</h4>
        </a>
        <span>
          <p>A little goes a long way</p>
          <FaAsterisk size={12} />
        </span>
        <div>
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsLinkedin />
        </div>
      </div>
      <div>
        <div>
          <h3>Company</h3>
          <a href="#">
            <p>About us</p>
          </a>
          <a href="#">
            <p>Press</p>
          </a>
          <a href="#">
            <p>Careers</p>
          </a>
        </div>
        <div>
          <h3>Legal</h3>
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
        <div>
          <h3>Help</h3>
          <a href="#">
            <p>Support centre</p>
          </a>
          <a href="#">
            <p>Sitemap</p>
          </a>
        </div>
      </div>
    </FooterLinksStyles>
  );
};
