import styled from "styled-components";

export const NavbarStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;

  & > div {
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    max-width: 1000px;

    & > a > p {
      font-weight: 700;
      font-size: large;
      color: #095160;
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
      & > span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: 2rem;
        &:hover {
          cursor: pointer;
        }
        & > p {
          margin: 0 1.2rem;
          font-size: medium;
          color: #095160;
          font-family: "Poppins", sans-serif;
          border-bottom: 1px solid transparent;
          transition: all ease-in-out 0.2;
          &:hover {
            border-bottom: 1px solid #095160;
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
  }
`;
