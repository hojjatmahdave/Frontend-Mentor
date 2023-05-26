import React, { useState } from "react";
import { NavbarStyles } from "../../styles/navbar/navbar-styles";
import AccountIMG from "../../assets/account.jpg";
import { CiMenuFries } from "react-icons/ci";
import { Slider } from "./slider";
import { Dropdowns } from "./dropdown";

export const Nav = () => {
  const [openSetting, setOpenSetting] = useState(false);
  const [scroll, setScroll] = useState(false);
  const sliderHnadler = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const onClose = () => {
    setOpenSetting(!openSetting);
  };
  window.addEventListener("scroll", sliderHnadler);
  return (
    <NavbarStyles scroll={scroll}>
      <div>
        <a href="https://www.ding.com/">
          <p>ding</p>
        </a>

        <div>
          <Dropdowns
            text={"Send top-up"}
            item1={"Send top-up"}
            item2={"Request top-up"}
            item3={"Recharge Cuba"}
            item4={"Recharge Mexico"}
            item5={"Promotions"}
            item6={"Countries"}
            item7={"Donate a top-up"}
            item9=""
            item8=""
            item10=""
          />

          <p>Gift Cards</p>
          <Dropdowns
            text="Company"
            item1="About us"
            item2="Blog"
            item3="Ding for Business"
            item4="Access for Good: Ding charity partners"
            item5=""
            item6=""
            item7=""
            item9=""
            item8=""
            item10=""
          />
          <p>Help</p>
          <Dropdowns
            text="EN"
            item1="English"
            item2="Español"
            item3="Deutsch"
            item4="Français"
            item5="Italiano"
            item6="Português"
            item7="Русский"
            item9="العربية"
            item8=""
            item10=""
          />

          <span>
            <img src={AccountIMG} alt="personAccount" />
            <Dropdowns
              text="My Account"
              item1="History"
              item2="Scheduled top-ups"
              item3="Contacts"
              item4="Profile settings"
              item5="Request top-up"
              item6="Refer a friend"
              item7=""
              item9=""
              item8=""
              item10=""
            />
          </span>
        </div>
        <div>
          <span>
            <img src={AccountIMG} alt="personAccount" />
            <CiMenuFries
              size={30}
              style={{ marginLeft: "1rem", cursor: "pointer" }}
              onClick={onClose}
            />
          </span>
        </div>
      </div>
      <Slider onOpen={openSetting} onClose={onClose} />
    </NavbarStyles>
  );
};
