import styled from "styled-components";

export const NavStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  img {
    width: 15%;
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > p {
    padding: 1.5rem;
    color: gray;
    font-size: 1.3rem;
    cursor: pointer;
    &:hover {
      color: tomato;
    }
  }

  @media screen and (max-width: 1250px) {
    & > p {
      padding: 1rem;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 760px) {
    & > p {
      padding: 0.8rem;
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 580px) {
    & > p {
      padding: 0.5rem;

      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
