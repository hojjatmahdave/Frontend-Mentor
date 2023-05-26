import styled from "styled-components";

export const TrustpilotStyles = styled.div`
  background-color: #7d0155;
  width: 550px;
  align-self: center;
  justify-self: center;
  height: 280px;
  z-index: 2;
  border-radius: 2rem 0.5rem 0.5rem 0.5rem;
  margin-top: 80px;
  padding: 2rem;
  position: relative;
  & > p {
    color: #fff;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }
  & > p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  & > p:nth-child(4) {
    font-size: 0.9rem;
    font-weight: 500;
    margin-left: 3rem;
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 1.5rem 0.5rem 1rem 0;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    & > img {
      width: 140px;
      height: auto;
      padding-right: 1rem;
    }
  }
  & > img {
    position: absolute;
    bottom: 0;
    right: 30px;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    height: 250px;
    border-radius: 2rem 0 0 0;
    & > p:nth-child(1) {
      font-weight: 500;
    }
    & > p {
      font-size: 0.9rem;
    }
    & > p:nth-child(4) {
      font-size: 0.8rem;
    }
    & > div {
      justify-content: center;
      margin: 1rem 0.5rem 0.5rem 0;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
      & > img {
        width: 140px;
        height: auto;
        padding-right: 1rem;
      }
    }
    & > img {
      height: auto;
      width: 60px;
      right: 20px;
      z-index: -1;
    }
  }
`;
