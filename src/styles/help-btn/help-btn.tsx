import styled from "styled-components";

export const HelpBtnStyles = styled.div`
  & > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background-color: #004a59;
    font-family: "Poppins", sans-serif;
    border-radius: 2rem;
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    color: #fff;
    font-size: 1rem;
    z-index: 2;
    & > p {
      padding-left: 0.5rem;
    }
    &:hover {
      cursor: pointer;
      -webkit-transform: scale(0.99);
      -moz-transform: scale(0.99);
      transform: scale(0.99);
      opacity: 0.9;
    }
  }
  @media screen and (max-width: 575px) {
    display: none;
  }
`;
