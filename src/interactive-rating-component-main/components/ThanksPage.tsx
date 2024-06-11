import React from "react";
import styled from "styled-components";
import thanks from "../images/illustration-thank-you.svg";
import { useLocation } from "react-router";
const ThanksPage = (props: any) => {
  let location = useLocation();
  return (
    <Container>
      <div className="thanksPage__content">
        <img src={thanks} alt="thanks" />
        <div className="thanksPage__content__selected-number">
          <p>You selected {location.state} out of 5 </p>
        </div>
        <h1>Thank you!</h1>
        <p id="content__main-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap");
  * {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
  }
  margin: 10px;
  background-color: #141519;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .thanksPage__content {
    font-family: "Overpass", sans-serif;
    background-color: #1e252f;
    padding: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      padding: 1rem;
    }
    .thanksPage__content__selected-number {
      background-color: #262f38;
      color: #fc7613;
      font-size: 18px;
      margin: 1rem;
      padding: 0.5rem 1.5rem;
      border-radius: 1.5rem;
    }
    h1 {
      color: #fff;
      padding: 1rem;
    }
    #content__main-text {
      width: 400px;
      line-height: 1.5rem;
      font-size: 1.2rem;
      padding: 0.5rem 0;
      text-align: center;
      color: gray;
    }
  }
  @media screen and (max-width: 375px) {
    .thanksPage__content {
      padding: 1rem;
      border-radius: 1rem;

      #content__main-text {
        width: 315px;
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
      h1 {
        color: #fff;
        padding: 0.5rem;
      }
    }
  }
`;
export default ThanksPage;
