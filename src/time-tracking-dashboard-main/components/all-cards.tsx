import React from "react";
import Cards from "../components/cards";
import Data from "../data.json";
import { work, exercise, play, selfCare, social, study } from "../imports";
import { AllCardsStyle } from "../styles/all-cards-styles";

const AllCards = () => {
  return (
    <AllCardsStyle>
      {Data.map((item) => {
        return (
          <>
            {item.title === "Work" ? (
              <Cards
                image={work}
                title={item.title}
                current={item.timeframes.daily.current}
                previous={item.timeframes.daily.previous}
                BG={"#ff8b64"}
              />
            ) : null}
          </>
        );
      })}
      {Data.map((item) => {
        return (
          <>
            {item.title === "Play" ? (
              <Cards
                image={play}
                title={item.title}
                current={item.timeframes.daily.current}
                previous={item.timeframes.daily.previous}
                BG={"#56c2e6"}
              />
            ) : null}
          </>
        );
      })}
      {Data.map((item) => {
        return (
          <>
            {item.title === "Study" ? (
              <Cards
                image={study}
                title={item.title}
                current={item.timeframes.daily.current}
                previous={item.timeframes.daily.previous}
                BG={"#ff5e7d"}
              />
            ) : null}
          </>
        );
      })}
      {Data.map((item) => {
        return (
          <>
            {item.title === "Exercise" ? (
              <Cards
                image={exercise}
                title={item.title}
                current={item.timeframes.daily.current}
                previous={item.timeframes.daily.previous}
                BG={"#4bcf83"}
              />
            ) : null}
          </>
        );
      })}
      {Data.map((item) => {
        return (
          <>
            {item.title === "Social" ? (
              <Cards
                image={social}
                title={item.title}
                current={item.timeframes.daily.current}
                previous={item.timeframes.daily.previous}
                BG={"#7235d1"}
              />
            ) : null}
          </>
        );
      })}
      {Data.map((item) => {
        return (
          <>
            {item.title === "Self Care" ? (
              <Cards
                image={selfCare}
                title={item.title}
                current={item.timeframes.daily.current}
                previous={item.timeframes.daily.previous}
                BG={"#f1c75b"}
              />
            ) : null}
          </>
        );
      })}
    </AllCardsStyle>
  );
};

export default AllCards;
