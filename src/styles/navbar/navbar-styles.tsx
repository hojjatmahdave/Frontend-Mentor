import styled from "styled-components";

export const NavbarStyles = styled.div<{ scroll: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 4;
  top: 0;
  transition: all 0.5s ease-in-out;
  background-color: ${({ scroll }) => (scroll ? "#fff" : "transparent")};
  border-bottom: ${({ scroll }) =>
    scroll ? "1px solid #ddd" : "1px solid transparent"};
  & > div {
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
    max-width: 1100px;
    & > div:nth-child(3) {
      display: none;
    }
    & > a > p {
      font-size: xx-large;
      font-weight: 1000;
      color: #095160;
      font-family: "Fira Sans", sans-serif;
      &:hover {
        cursor: pointer;
      }
    }
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      & > p {
        color: #095160;
        margin: 0 1rem;
        font-size: medium;
        font-family: "Poppins", sans-serif;
        border-bottom: 1px solid transparent;
        &:hover {
          border-bottom: 1px solid #095160;
          cursor: pointer;
        }
      }
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        color: #095160;
        margin: 0 0.5rem;
        font-size: medium;
        font-family: "Poppins", sans-serif;
        border-bottom: 1px solid transparent;
        & > p {
          padding: 0 0.35rem 0 0.2rem;
        }
        &:hover {
          border-bottom: 1px solid #095160;
          cursor: pointer;
        }
      }
      & > span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: 1rem;
        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          &:hover {
            cursor: pointer;
          }
          & > p {
            margin: 0 0.5rem;
            font-size: medium;
            color: #095160;
            font-family: "Poppins", sans-serif;
          }
        }
        & > img {
          /* margin: 1rem; */
          border-radius: 50%;
          width: 35px;
          height: 35px;
          max-width: 35px;
          max-height: 35px;
          min-height: 35px;
          min-width: 35px;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      width: 900px;
      max-width: 900px;
      padding: 0 1rem;
    }
    @media screen and (max-width: 1025px) {
      & > div:nth-child(2) {
        display: none;
      }
      & > div:nth-child(3) {
        display: block;
      }
    }
  }
`;
