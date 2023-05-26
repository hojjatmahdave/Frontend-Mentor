import React, { useState } from "react";
import { PhoneNumberStyles } from "../../styles/phone-number/phone-number-styles";
import PhoneInput from "react-phone-number-input";
export const PhoneNumber = () => {
  const [value, setValue] = useState();
  return (
    <PhoneNumberStyles>
      <span>Who are you sending top-up to?</span>
      <PhoneInput value={value} onChange={() => setValue} />
      <button>Start top-up</button>
    </PhoneNumberStyles>
  );
};
