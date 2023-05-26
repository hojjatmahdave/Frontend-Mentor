import React from "react";
import { CardsStyle } from "../../../styles/main/first-section/cards-style";
import charity from "../../../assets/charity-cards.png";
import { MdKeyboardArrowRight } from "react-icons/md";
export const Cards = () => {
  return (
    <CardsStyle>
      {/* first card */}
      <div>
        <div>
          <div>
            <p>Promo</p>
          </div>
          <h6>For snappier experiences and more rewards</h6>
          <a href="#">
            <span>Download app</span>
            <MdKeyboardArrowRight />
          </a>
        </div>
        <div>
          <p>APP</p>
          <p>APP</p>
          <p>APP</p>
          <p>APP</p>
        </div>
      </div>
      {/* second card */}
      <div>
        <div>
          <div>
            <p>Learn</p>
          </div>
          <p>Help charities worldwide with each top-up</p>
          <a href="#">
            <span>Access for Good</span>
            <MdKeyboardArrowRight />
          </a>
        </div>
        <img src={charity} alt="" />
      </div>
    </CardsStyle>
  );
};
