import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import {
  SliderGloabalStyle,
  SliderStyle,
} from "../../styles/navbar/slider-style";
import ReactCountryFlag from "react-country-flag";
import { Dropdowns } from "./dropdown";
import Mapper from "./slider-component/mapper";
import Btn from "./slider-component/btn";
type Props = {
  onOpen: boolean;
  onClose: any;
};
export const Slider = ({ onOpen, onClose }: Props) => {
  return (
    <Drawer
      width="375"
      title={
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
      }
      placement="right"
      open={onOpen}
      onClose={onClose}
    >
      <Mapper />

      <Btn />
    </Drawer>
  );
};
