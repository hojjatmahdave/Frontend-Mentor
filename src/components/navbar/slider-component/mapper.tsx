import React from "react";
import ConstantArray from "../../../constants/nav-slider";
import ReactCountryFlag from "react-country-flag";
import {
  SliderGloabalStyle,
  SliderStyle,
} from "../../../styles/navbar/slider-style";

const Mapper = () => {
  return (
    <div>
      {ConstantArray.map((item) => {
        return (
          <SliderStyle key={item.id}>
            <SliderGloabalStyle />
            {item.text !== undefined ? (
              <a href="#">
                <h6>{item.text}</h6>
                {item.text === "Recharge Cuba" ? (
                  <ReactCountryFlag
                    countryCode="CU"
                    svg
                    style={{
                      width: "2em",
                      height: "2em",
                      margin: "0 0.5rem",
                    }}
                    title="CU"
                  />
                ) : null}

                {item.text === ">Recharge Mexico" ? (
                  <ReactCountryFlag
                    countryCode="CU"
                    svg
                    style={{
                      width: "2em",
                      height: "2em",
                      margin: "0 0.5rem",
                    }}
                    title="CU"
                  />
                ) : null}
              </a>
            ) : null}
            {item.textInfo !== undefined ? (
              <a href="#">
                <p>{item.textInfo}</p>
              </a>
            ) : null}
          </SliderStyle>
        );
      })}
    </div>
  );
};

export default Mapper;
