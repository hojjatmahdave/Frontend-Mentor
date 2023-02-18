import styled from "styled-components";

export const NavStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > p {
    padding: 1.5rem;
    color: gray;
  }
  @media screen and (max-width: 960px) {
    & > p {
      padding: 1rem;
    }
    @media screen and (max-width: 760px) {
      & > p {
        padding: 0.4 rem;
      }
    }
  }
`;
