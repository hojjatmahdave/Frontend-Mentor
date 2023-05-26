import styled from "styled-components";

export const FourthSectionStyles = styled.div`
  width: 100%;
  height: max-content;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 4rem 0;
  & > h1 {
    width: 80%;
    color: #004a59;
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    margin: 0 2rem;
    font-family: "Poppins", sans-serif;
  }

  @media screen and (max-width: 1025px) {
    & > h1 {
      width: 95%;
    }
  }
  @media screen and (max-width: 575px) {
    & > h1 {
      font-size: 1.5rem;
      font-weight: 550;
    }
  }
`;
