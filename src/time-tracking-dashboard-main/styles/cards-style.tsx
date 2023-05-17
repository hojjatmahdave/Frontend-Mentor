import styled from "styled-components";

export const CardsStyles = styled.div<{ BG: string }>`
  background-color: ${({ BG }) => BG};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  width: 260px;
  height: 220px;
  margin: 2rem;
  & > img {
    top: 0;
    right: 10px;
    margin-top: -10px;
    position: absolute;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1d204b;
    border-radius: 1rem;
    position: absolute;
    transition: all 0.2s;
    bottom: 0;
    width: 100%;
    height: 80%;
    padding: 2rem;
    color: #d4d7ff;

    & > p:nth-child(2) {
      font-size: 3rem;
      padding-top: 1rem;
    }
    & > p:nth-child(3) {
      font-size: 0.8rem;
      padding-top: 0.5rem;
      color: #d4d7ffa0;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #d4d7ff;
      & > img:hover {
        cursor: pointer;
      }
    }
    &:hover {
      background-color: #34397b;
    }
  }
`;
