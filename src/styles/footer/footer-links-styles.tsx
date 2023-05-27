import styled from "styled-components";

export const FooterLinksStyles = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: flex-start; */
    padding-left: 1rem;

    & > a {
      & > h4 {
        font-family: "Fira Sans", sans-serif;
        font-size: 2rem;
        color: #004a59;
        font-weight: 700;
      }
    }
    & > span {
      margin: 0.7rem 0 1rem 0;
      & > p {
        display: inline;
        color: #004a59;
        font-size: 0.85rem;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        padding-right: 0.5rem;
      }
      & > svg {
        color: #d900c7;
        rotate: -170deg;
      }
    }
    & > div > svg {
      color: #004a59;
      font-size: 20px;
      margin: 0 2rem 0 0;
      cursor: pointer;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: "Poppins", sans-serif;
      margin: 1rem 2rem;
      & > h3 {
        font-size: 1rem;
        color: #004a59;
      }
      & > a > p {
        color: #aaa;
        padding: 0.5rem 0;
        font-size: 0.8rem;
        &:hover {
          color: #757575;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 45vh;
    & > div:nth-child(2) {
      & > div {
        margin: 1rem;
      }
    }
  }
`;
