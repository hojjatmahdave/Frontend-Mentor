import styled from "styled-components";

export const BtnsStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  overflow-x: scroll;
  width: 100%;
  height: 150px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    max-width: max-content;
    min-width: max-content;
    margin: 3rem 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: #fff;
    color: rgb(112, 140, 140);
    height: 32px;

    outline: none;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    border: 1px solid rgb(112, 140, 140);
    &:hover {
      cursor: pointer;
      transform: scale(0.98);
    }
  }
  & > button:nth-child(3) {
    background-color: #cbf200;
    border: none;
    color: rgb(0, 74, 89);
  }
`;
