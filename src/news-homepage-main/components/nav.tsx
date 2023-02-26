import React, { useState } from "react";
import { ReactComponent as Exit } from "../assets/images/icon-menu-close.svg";
import { ReactComponent as Menu } from "../assets/images/icon-menu.svg";

import logo from "../assets/images/logo.svg";
import {
  ExitIcon,
  Links,
  MenuStyle,
  NavStyle,
  SideLinks,
  SideNav,
} from "../styles/nav-style";
type Props = {
  Background: any;
};
const Nav = ({ Background }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const HandelSetToggleMenuOpen = () => {
    setToggleMenu(!toggleMenu);
    Background({ opacity: 0.75 });
  };
  const HandelSetToggleMenuClose = () => {
    setToggleMenu(!toggleMenu);
    Background({ opacity: 1 });
  };
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
        <MenuStyle>
          {toggleMenu ? null : <Menu onClick={HandelSetToggleMenuOpen} />}
        </MenuStyle>
        {toggleMenu && (
          <SideLinks>
            <ExitIcon>
              <Exit onClick={HandelSetToggleMenuClose} />
            </ExitIcon>
            <p>Home</p>
            <p>New</p>
            <p>Popular</p>
            <p>Trending</p>
            <p>Categories</p>
          </SideLinks>
        )}
      </SideNav>
    </>
  );
};

export default Nav;
