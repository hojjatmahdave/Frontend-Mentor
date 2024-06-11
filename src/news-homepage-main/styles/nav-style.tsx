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
  @media screen and (max-width: 480px) {
    display: none;
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
export const SideNav = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
`;
export const SideLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #fff;
  padding: 1rem;
  height: 100%;
  width: 65%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;

  & > p {
    padding: 1rem 2rem;
    border-radius: 0.4rem;
    width: 100%;
    font-size: 1.2rem;
    &:hover {
      background-color: #ddd;
    }
  }
`;
export const MenuStyle = styled.div`
  cursor: pointer;
`;
export const ExitIcon = styled.div`
  cursor: pointer;
  padding-bottom: 5rem;
`;
