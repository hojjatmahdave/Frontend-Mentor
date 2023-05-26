import styled from "styled-components";

export const PhoneNumberStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 550px;
  max-width: 550px;
  height: 200px;
  border-radius: 1.5rem;
  background-color: #fff;
  overflow: hidden;
  z-index: 2;
  & > span {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    color: rgb(0, 74, 89);
  }

  & > button {
    border: none;
    outline: none;
    width: 90%;
    padding: 0.7rem 1rem;
    margin: 1.5rem 0;
    border-radius: 1.5rem;
    background-color: #cbf200;
    color: rgb(0, 74, 89);
    font-family: "Poppins", sans-serif;
    font-size: medium;
    font-weight: 550;
    &:hover {
      opacity: 0.9;
      -webkit-transform: scale(0.99);
      -moz-transform: scale(0.99);
      transform: scale(0.99);
      cursor: pointer;
    }
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    border-radius: 1.5rem 0 0 0;
  }
`;
