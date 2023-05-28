import styled from "styled-components";

export const BodyHistoryStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 1100px;
  max-width: 1100px;
  margin-top: 120px;
  color: #004a59;
  font-family: "Poppins", sans-serif;
  & > span {
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 4rem 2rem 2rem 2rem;
    & > p {
      font-size: 1rem;
      font-weight: 450px;
      padding: 0.5rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > p {
      font-size: 2rem;
      font-weight: 500;
      margin: 1rem 0;
    }
    & > button {
      border: none;
      outline: none;
      background-color: #cbf200;
      padding: 1rem 2rem;
      border-radius: 2rem;
      font-size: 1.2rem;
      color: #004a59;
      font-family: "Poppins", sans-serif;
      margin-bottom: 2rem;
      &:hover {
        -webkit-transform: scale(0.99);
        -moz-transform: scale(0.99);
        transform: scale(0.99);
        cursor: pointer;
      }
    }
    & > div {
      margin-bottom: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 1000px;
      max-width: 1000px;
      background-color: #fff;
      border-radius: 3rem 1rem 1rem 1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 900px;
    max-width: 900px;
  }
  @media screen and (max-width: 1025px) {
    width: 100%;
    max-width: 100%;
    & > div > div {
      margin-bottom: 4rem;
      & > h2 {
        margin: 0 3rem;
      }
      width: 100%;
      max-width: 100%;
      /* min-width: 1000px; */
    }
  }
`;
