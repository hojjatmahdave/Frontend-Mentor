import React from "react";
import { FourthSectionStyles } from "../../styles/main/fourth-section/fourth-section-styles";
import { Collapses } from "./fourth-section-components/collapses";

export const FourthSection = () => {
  return (
    <FourthSectionStyles>
      <h1>Have a question about sending recharge with Ding?</h1>
      <Collapses />
    </FourthSectionStyles>
  );
};
