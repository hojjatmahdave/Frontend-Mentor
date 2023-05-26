import styled from "styled-components";

export const FooterStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 18vh;
  padding: 0 8rem;
  z-index: 2;
  background-color: #fff;
  & > div:nth-child(1) {
    & > a > h4 {
      font-size: 2rem;
      font-weight: 900;
      color: #004a59;
      font-family: "Fira Sans", sans-serif;
    }
    & > a > p {
      color: #004a59;
      font-size: 1rem;
    }
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > a > p {
      font-size: 0.9rem;
      color: rgb(112, 140, 140);
      font-family: "Poppins", sans-serif;
      margin-left: 1.5rem;
      border-bottom: 1px solid transparent;
      &:hover {
        border-bottom: 1px solid #aaa;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    padding: 0 4rem;
    & > div:nth-child(1) {
      & > a > h4 {
        font-size: 1.8rem;
        font-weight: 900;
      }
      & > a > p {
        font-size: 0.9rem;
      }
    }
    & > div {
      & > a > p {
        font-size: 0.7rem;
      }
    }
  }
  @media screen and (max-width: 885px) {
    padding: 0 2rem;

    & > div {
      flex-direction: column;
      align-items: flex-start;
      & > a > p {
        font-size: 0.7rem;
        margin-left: 1rem;
      }
    }
  }
`;
