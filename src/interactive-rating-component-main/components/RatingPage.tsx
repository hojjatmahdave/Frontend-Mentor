import React, { useState } from "react";
import styled from "styled-components";
import star from "../images/icon-star.svg";
import { useNavigate } from "react-router-dom";
const RatingPage = () => {
  const [click, setClick] = useState("");
  const [background1, setBackground1] = useState("");
  const [background2, setBackground2] = useState("");
  const [background3, setBackground3] = useState("");
  const [background4, setBackground4] = useState("");
  const [background5, setBackground5] = useState("");

  let navigate = useNavigate();
  const onclick1 = (e: any) => {
    setClick(e);
    setBackground1("#7c8898");
    setBackground2("");
    setBackground3("");
    setBackground4("");
    setBackground5("");
  };
  const onclick2 = (e: any) => {
    setClick(e);
    setBackground2("#7c8898");
    setBackground1("");
    setBackground3("");
    setBackground4("");
    setBackground5("");
  };
  const onclick3 = (e: any) => {
    setClick(e);
    setBackground3("#7c8898");
    setBackground1("");
    setBackground2("");
    setBackground4("");
    setBackground5("");
  };
  const onclick4 = (e: any) => {
    setClick(e);
    setBackground1("");
    setBackground2("");
    setBackground3("");
    setBackground5("");
    setBackground4("#7c8898");
  };
  const onclick5 = (e: any) => {
    setClick(e);
    setBackground1("");
    setBackground2("");
    setBackground3("");
    setBackground4("");
    setBackground5("#7c8898");
  };
  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (click.length > 0) {
      navigate("/thanks", { state: click });
      console.log("submitted");
    }
  };
  console.log(click);
  return (
    <Container>
      <form
        action=""
        className="ratingPage__form"
        onSubmit={(e) => handelSubmit(e)}
      >
        <div className="ratingPage__star-image">
          <img src={star} alt="star" />
        </div>
        <div className="ratingPage__container">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="ratingPage__buttons">
            <button
              type="button"
              onClick={() => onclick1("1")}
              style={{ background: background1 }}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => onclick2("2")}
              style={{ background: background2 }}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => onclick3("3")}
              style={{ background: background3 }}
            >
              3
            </button>
            <button
              type="button"
              onClick={() => onclick4("4")}
              style={{ background: background4 }}
            >
              4
            </button>
            <button
              type="button"
              onClick={() => onclick5("5")}
              style={{ background: background5 }}
            >
              5
            </button>
          </div>
          <div className="ratingPage__button-submit">
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
    </Container>
  );
};
const Container = styled.div`
  * {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
  }
  @import url("https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap");
  background-color: #141519;
  width: 105vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .ratingPage__form {
    background-color: #1e252f;
    padding: 2rem;
    border-radius: 2rem;
    font-family: "Overpass", sans-serif;
    .ratingPage__star-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #2e353f;
    }
    .ratingPage__container h1 {
      color: #fff;
      font-size: 2rem;
      margin-top: 2rem;
    }
    .ratingPage__container p {
      color: gray;
      width: 380px;
    }
    .ratingPage__buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 2rem 0;
    }
    .ratingPage__buttons button {
      margin: 0.5rem;
      width: 55px;
      height: 55px;
      border-radius: 50%;
      font-size: 16px;
      background-color: #2e353f;
      color: #fff;
      border: none;
      outline: none;
    }
    .ratingPage__buttons button:hover {
      background-color: #fc7613;
      cursor: pointer;
      color: #fff;
    }
    .ratingPage__buttons button:hover {
      background-color: #fc7613;
      cursor: pointer;
      color: #fff;
    }
    .ratingPage__button-submit {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ratingPage__button-submit button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
      font-size: 20px;
      text-transform: uppercase;
      border-radius: 2rem;
      border: none;
      outline: none;
      background-color: #fc7613;
      color: #fff;
    }
    .ratingPage__button-submit button:hover {
      background-color: #fff;
      color: #fc7613;
    }
  }
  @media screen and (max-width: 375px) {
    .ratingPage__form {
      padding: 1.5rem;
      border-radius: 1rem;
      .ratingPage__buttons button {
        margin: 0.35rem;
        width: 45px;
        height: 45px;
        font-size: 15px;
      }
      .ratingPage__button-submit button {
        font-size: 18px;
      }
      .ratingPage__container {
        margin: 0%;
        padding: 0%;
      }
      .ratingPage__container p {
        width: 300px;
      }
      .ratingPage__container h1 {
        font-size: 1.8rem;
        padding-bottom: 0.7rem;
      }
      .ratingPage__button-submit button {
        height: 45px;
      }
      .ratingPage__star-image {
        width: 40px;
        height: 40px;
      }
      .ratingPage__button-submit button {
        width: 95%;
      }
    }
  }
`;
export default RatingPage;
