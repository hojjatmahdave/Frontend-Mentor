import styled from "styled-components";

export const FirstSectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65vh;
  & > div:nth-child(1) {
    align-self: center;
    justify-self: center;
    width: 1100px;
    max-width: 1100px;
    margin: 0 1rem;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > div:nth-child(1) {
      padding: 0 1rem;
      align-self: center;
      width: 100%;
      max-width: 550px;
      & > h2 {
        margin-top: 20px;
        width: 530px;
        font-size: 2.8rem;
        font-weight: 600;
        color: #004a59;
        font-family: "Poppins", sans-serif;

        padding-bottom: 1rem;
      }
      & > p {
        font-size: 1rem;
        color: #004a59;
        font-family: "Poppins", sans-serif;
      }
    }
  }
  & > div:nth-child(2) {
    align-self: center;
    width: 1100px;
    max-width: 1100px;
    margin: 2rem 0 0 2rem;
    & > img {
      width: 130px;
      height: auto;
      margin: 0 1rem;
    }
  }
  & > span {
    width: 1100px;
    max-width: 1100px;
    align-self: center;
    & > p {
      font-size: 0.9rem;
      color: #004a59;
      margin: 0 0 0 2rem;
      font-family: "Poppins", sans-serif;
    }
  }
  @media screen and (max-width: 1200px) {
    & > div:nth-child(1) {
      width: 900px;
      max-width: 900px;
      padding: 0 1rem;
      & > div:nth-child(1) {
        width: 450px;
        max-width: 450px;
        h2 {
          width: 400px;
        }
      }
    }
    & > div:nth-child(2) {
      width: 900px;
      max-width: 900px;
      margin: 2rem 0 0 2rem;
    }
    & > span {
      width: 900px;
      max-width: 900px;
    }
  }
  @media screen and (max-width: 1025px) {
    width: 100%;
    height: 85vh;
    & > div:nth-child(1) {
      width: 100%;
      max-width: 100%;
      padding: 0 2rem;
      flex-direction: column;

      & > div:first-child {
        width: 100%;
        max-width: 100%;
        align-self: center;

        & > h2 {
          text-align: center;
          width: 100%;
        }
        & > p {
          text-align: center;
          margin-bottom: 3rem;
        }
      }
      & > div:last-child {
        width: 550px;
        max-width: 550px;
      }
    }
    & > div:nth-child(2) {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }
    & > span {
      text-align: center;
    }
  }
  @media screen and (max-width: 575px) {
    & > div:nth-child(1) {
      padding: 0;
      & > div:first-child {
        padding: 0 2rem;
        & > h2 {
          font-size: 1.5rem;
          font-weight: 550;
        }
      }
      & > div:last-child {
        width: 100%;
      }
    }

    & > span > p {
      font-size: 0.7rem;
    }
  }
`;
