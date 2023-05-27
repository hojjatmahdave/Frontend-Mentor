import styled from "styled-components";

export const FooterInfoStyles = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  justify-content: space-around;
  flex-direction: row;
  color: #004a59;
  background-color: #ccfff6;
  font-family: "Poppins", sans-serif;

  & > div {
    margin: 0 3rem 0 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > h4 {
      font-size: 1.5rem;
      font-weight: 300;
      padding-right: 0.5rem;
    }
    & > p {
      font-size: 0.8rem;
    }
  }
  & > p {
    font-size: 1rem;
  }
  @media screen and (max-width: 785px) {
    & > div {
      & > h4 {
        font-size: 1.3rem;
      }
      & > p {
        font-size: 0.6rem;
      }
    }
    & > p {
      font-size: 0.7rem;
    }
  }
`;
