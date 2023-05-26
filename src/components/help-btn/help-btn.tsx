import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { HelpBtnStyles } from "../../styles/help-btn/help-btn";

export const HelpBtn = () => {
  return (
    <HelpBtnStyles>
      <button>
        <BsQuestionCircleFill />
        <p>Help</p>
      </button>
    </HelpBtnStyles>
  );
};
