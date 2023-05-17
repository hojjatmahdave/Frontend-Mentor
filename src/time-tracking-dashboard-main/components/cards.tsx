import React from "react";
import { CardsStyles } from "../styles/cards-style";
import eclips from "../images/icon-ellipsis.svg";

type Props = {
  image: string;
  title: string;
  current: number;
  previous: number;
  BG: string;
};
const Cards = ({ image, title, current, previous, BG }: Props) => {
  return (
    <CardsStyles BG={BG}>
      <img src={image} alt="#" />
      <div>
        <div>
          <p>{title}</p>
          <img src={eclips} alt="" />
        </div>
        <p>{current}hrs</p>
        <p>Last Week - {previous}hrs</p>
      </div>
    </CardsStyles>
  );
};

export default Cards;
