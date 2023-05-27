import styled from "styled-components";

export const PhoneNumberStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 550px;
  max-width: 550px;
  height: 230px;
  border-radius: 1.5rem;
  background-color: #fff;
  overflow: hidden;
  margin: 1rem 0;
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
  & > div {
    width: 90%;
    padding: 0 2rem;
    border: 1px solid #ddd;
    border-radius: 2rem;
    :focus-within {
      box-shadow: -1px 1px 23px -5px rgba(0, 0, 0, 0.6);
      -webkit-box-shadow: -1px 1px 23px -5px rgba(0, 0, 0, 0.6);
      -moz-box-shadow: -1px 1px 23px -5px rgba(0, 0, 0, 0.6);
    }
    & > div {
      & > select {
        display: flex;
        align-items: center;
        justify-content: center;

        ::-webkit-scrollbar {
          width: 8px; /* width of the entire scrollbar */
        }

        ::-webkit-scrollbar-track {
          background: #b3b3b3; /* color of the tracking area */
        }
        ::-webkit-scrollbar-thumb {
          background-color: #979797; /* color of the scroll thumb */
        }
        scrollbar-width: thin;
        scrollbar-color: #adadad #e0e0e0;
        transition: scrollbar-color 0.3s ease;
      }
    }
    & > input {
      padding: 0.8rem 2rem;
      border: none;
      outline: none;
      font-size: 1.2rem;
      font-family: "Poppins", sans-serif;
    }
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    border-radius: 1.5rem 0 0 0;
  }
`;
