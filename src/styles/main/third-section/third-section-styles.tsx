import styled from "styled-components";

export const ThirdSectionStyles = styled.div`
  width: 100%;
  height: max-content;
  padding: 4rem 0;
  background-color: #004a59;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;

  & > h1 {
    width: 70%;
    color: #ccfff6;
    font-size: 3.5rem;
    text-align: center;
  }
  & > p {
    width: 70%;
    color: #ffffff;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 575px) {
    & > h1 {
      width: 90%;
      font-size: 2rem;
    }
    & > p {
      width: 90%;
      font-size: 1rem;
    }
  }
`;
