import styled from "styled-components";

export const SecondeSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  & > h1,
  & > h2 {
    width: 100%;
    color: #004a59;
    font-size: 2.8rem;
    font-weight: 600;
    font-family: "Fira Sans", sans-serif;
    text-align: center;
    /* padding: 2rem 0; */
  }
  & > h1 {
    margin-top: 5rem;
  }
  & > h3 {
    width: 70%;
    color: #004a59;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Fira Sans", sans-serif;
    text-align: center;
    margin: 2rem 0;
    & > span {
      font-weight: 500;
    }
  }
  & > img:nth-child(6) {
    border-radius: 50%;
  }
  & > img:nth-child(8) {
    height: 20px;
  }
  @media screen and (max-width: 1025px) {
    & > h3 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 575px) {
    & > h1,
    & > h2 {
      font-size: 1.5rem;
      font-weight: 550;
    }
  }
`;
