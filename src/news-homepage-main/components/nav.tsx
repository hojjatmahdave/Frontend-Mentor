import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as Exit } from "../assets/images/icon-menu-close.svg";
import { ReactComponent as Menu } from "../assets/images/icon-menu.svg";

import logo from "../assets/images/logo.svg";
import { Links, NavStyle, SideLinks, SideNav } from "../styles/nav-style";
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
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
      <SideNav>
        <img src={logo} alt="" />
        {toggleMenu ? (
          <Exit
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <Menu
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <SideLinks>
            <Container>
              <p>Home</p>
              <p>New</p>
              <p>Popular</p>
              <p>Trending</p>
              <p>Categories</p>
            </Container>
          </SideLinks>
        )}
      </SideNav>
    </>
  );
};

export default Nav;
