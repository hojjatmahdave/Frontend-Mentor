import React from "react";
import { CradData } from "../../assets/data/card";
import { CardsStyle, ImageCard } from "../../styles/body-style";
const Cards = () => {
  return (
    <CardsStyle>
      {CradData.map((items, index) => (
        <div key={index}>
          <ImageCard src={items.image} alt="" />
          <div>
            <h1>{items.number}</h1>
            <h3>{items.title}</h3>
            <p>{items.text}</p>
          </div>
        </div>
      ))}
    </CardsStyle>
  );
};

export default Cards;
