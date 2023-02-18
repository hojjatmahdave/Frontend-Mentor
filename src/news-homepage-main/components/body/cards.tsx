import React from "react";
import { CradData } from "../../assets/data/card";
import { CardsStyle, ImageCard } from "../../styles/body-style";
const Cards = () => {
  return (
    <CardsStyle>
      {CradData.map((items, index) => (
        <>
          <ImageCard src={items.image} alt="" />
          <h1>{items.number}</h1>
          <h2>{items.title}</h2>
          <p>{items.text}</p>
        </>
      ))}
    </CardsStyle>
  );
};

export default Cards;
