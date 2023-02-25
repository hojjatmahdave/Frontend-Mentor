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
  display: none;
  display: inline-block;
  background-color: #fff;
  height: 100%; /* 100% Full-height */
  width: 65%; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
`;
export const Container = styled.div`
  @media screen and (max-width: 480px) {
    /* display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: end;
  position: absolute;
  top: 40px;
  margin-top: 1rem;
  min-width: 200px; */
  }
`;
