import React from "react";
import { CompanyIconsStyles } from "../../../styles/main/second-section/company-icons-styles";
import {
  Company1,
  Company2,
  Company3,
  Company4,
  Company5,
  Company6,
} from "../../../indexs";
export const CompanyIcons = () => {
  return (
    <CompanyIconsStyles>
      <a href="https://www.ding.com/countries/central-north-america/mexico/recharge-telcel">
        <img src={Company1} alt="#" />
      </a>
      <a href="https://www.ding.com/operators/tigo">
        <img src={Company2} alt="#" />
      </a>
      <a href="https://www.ding.com/operators/claro">
        <img src={Company3} alt="#" />
      </a>
      <a href="UN.png">
        <img src={Company4} alt="#" />
      </a>
      <a href="https://www.ding.com/countries/central-north-america/canada/top-up-virgin-mobile">
        <img src={Company5} alt="#" />
      </a>
      <a href="https://www.ding.com/countries/central-north-america/united-states/top-up-t-mobile">
        <img src={Company6} alt="#" />
      </a>
    </CompanyIconsStyles>
  );
};
