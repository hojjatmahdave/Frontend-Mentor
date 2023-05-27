import React from "react";
import { BodyHistoryStyles } from "../../styles/history/body-history-styles";
import { BsArrowLeft } from "react-icons/bs";
import noHistory from "../../assets/nohistory.svg";
// here is the placement of a mapper but cuz lack of time and not having a complete templete for now there is nothing instrad of nohistory
export const BodyHistory = () => {
  return (
    <BodyHistoryStyles>
      <span>
        <BsArrowLeft />
        <p>My Account</p>
      </span>
      <div>
        <p>History</p>
        <button>Send top-up</button>
        <img src={noHistory} alt="#" />
        <div>
          <h2>Hmmm... It looks like you haven't sent a top-up yet</h2>
          <p>
            This is where you will be able to check the status of any of your
            top-ups.
          </p>
        </div>
      </div>
    </BodyHistoryStyles>
  );
};
