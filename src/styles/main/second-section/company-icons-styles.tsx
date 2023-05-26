import styled from "styled-components";

export const CompanyIconsStyles = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas: "1 2 3 4 5 6";
  grid-column-gap: 6rem;
  padding: 3rem 0 1rem 0;
  border-bottom: 1px solid #e5e5e5;
  & > a > img {
    margin: 1rem;
  }
  & > a:nth-child(1) {
    grid-area: "1";
  }
  & > a:nth-child(2) {
    grid-area: "2";
  }
  & > a:nth-child(3) {
    grid-area: "3";
  }
  & > a:nth-child(4) {
    grid-area: "4";
  }
  & > a:nth-child(5) {
    grid-area: "5";
  }
  & > a:nth-child(6) {
    grid-area: "6";
  }
  @media screen and (max-width: 1025px) {
    grid-template-areas: "1 2 3 " "4 5 6";
    grid-column-gap: 2rem;
    justify-content: space-around;
    width: 100%;
    max-width: 900px;
  }
`;
