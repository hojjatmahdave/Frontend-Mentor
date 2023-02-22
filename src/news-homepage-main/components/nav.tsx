import React from "react";
import logo from "../assets/images/logo.svg";
import { Links, NavStyle } from "../styles/nav-style";
const Nav = () => {
  return (
    <NavStyle>
      <img src={logo} alt="" />
      <Links>
        <p>Home</p>
        <p>New</p>
        <p>Popular</p>
        <p>Trending</p>
        <p>Categories</p>
      </Links>
    </NavStyle>
  );
};

export default Nav;
