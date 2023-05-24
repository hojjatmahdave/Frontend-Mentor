import React from "react";
import { NavbarStyles } from "../../styles/navbar/navbar-styles";
import AccountIMG from "../../assets/account.jpg";
const Nav = () => {
  return (
    <NavbarStyles>
      <div>
        <a href="https://www.ding.com/">
          <p>ding</p>
        </a>
        {window.innerWidth > 1025 ? (
          <p>hello</p>
        ) : (
          <div>
            <p>Send top-up</p>
            <p>Gift Cards</p>
            <p>Company</p>
            <p>Help</p>
            <p>EN</p>

            <span>
              <img src={AccountIMG} alt="personAccount" />
              <p>My Account</p>
            </span>
          </div>
        )}
      </div>
    </NavbarStyles>
  );
};

export default Nav;
