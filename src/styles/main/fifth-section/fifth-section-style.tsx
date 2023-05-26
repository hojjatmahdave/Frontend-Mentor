import styled from "styled-components";

export const FifthSectionStyles = styled.div`
  width: 100%;
  height: max-content;
  background-color: #ff350d;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 97%;
    height: 60vh;
    margin-top: 4rem;
    border-radius: 3rem 1rem 0 0;
    background-color: #fff;
    & > div {
      /* background-color: aqua; */
      font-family: "Fira Sans", sans-serif;
      width: 400px;

      & > h1 {
        color: #004a59;
        font-size: 3rem;
        font-weight: 550;
      }
      & > p {
        font-size: 1.2rem;
        line-height: 40px;
      }
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 2rem;
        & > a {
          background-color: #000;
          border-radius: 0.5rem;
          padding: 0.3rem 0.4rem;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1025px) {
    & > div {
      flex-direction: column;
      height: 80vh;
      & > div {
        align-self: center;
        text-align: center;
        width: 100%;
        & > div {
          justify-content: center;
          & > a {
            margin: 0 2rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    & > div {
      & > div {
        margin: 0 2rem;
        & > h1 {
          font-size: 2rem;
        }
        & > p {
          font-size: 1rem;
          line-height: 35px;
        }
      }
    }
  }
`;
