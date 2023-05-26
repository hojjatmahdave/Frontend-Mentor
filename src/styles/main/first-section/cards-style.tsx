import styled from "styled-components";

export const CardsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 1rem;
  margin-top: 50px;
  font-family: "Poppins", sans-serif;
  overflow: auto;
  ov &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  //style the first card
  & > div:nth-child(1) {
    margin: 1rem;
    padding: 1rem 1.5rem;

    background-color: #001273;
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    height: 180px;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div:nth-child(1) {
      height: 100%;
      & > div {
        width: 60px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 1rem;
        & > p {
          color: rgb(0, 74, 89);
          font-size: 0.8rem;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
      & > h6:nth-child(2) {
        color: #ccfff6;
        font-size: medium;
        font-weight: 400;
        padding: 1rem 0 0.5rem 0;
      }
      & > a {
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: all 0.3s ease-in-out;
        & > span {
          font-size: medium;
        }
        &:hover {
          transform: scaleX(1.05);
        }
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > p {
        color: #ccfff6;
        font-size: 2rem;
        font-weight: 600;
        padding: 0rem 0;
        line-height: 35px;
      }
      & > p:nth-child(3),
      & > p:nth-child(4) {
        color: #ffffff;
      }
    }
  }
  /* style the second card */
  & > div:nth-child(2) {
    margin: 1rem;
    overflow: hidden;
    position: relative;
    padding: 1rem 1.5rem;
    background-color: #800055;
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    height: 180px;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      height: 100%;
      & > div {
        width: 60px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffccea;
        border-radius: 1rem;
        & > p {
          color: rgb(0, 74, 89);
          font-size: 0.8rem;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
      & > p:nth-child(2) {
        color: #ffccea;
        font-size: medium;
        font-weight: 400;
        padding: 2rem 0 0.8rem 0;
      }
      & > a {
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: all 0.3s ease-in-out;
        & > span {
          font-size: medium;
        }
        &:hover {
          transform: scaleX(1.05);
        }
      }
    }
    & > img {
      z-index: 1;
      position: absolute;
      top: -140px;
      right: -50px;
      border-radius: 1rem;
      border: 4px solid rgb(231, 239, 243);
    }
  }
`;
