import styled from "styled-components";

export const TopupStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130vh;
  background-color: #ccfff6;
  position: relative;
  & > svg {
    position: absolute;
    top: 250px;
    left: -100px;
    width: 700px;
    height: 700px;
    color: #004a59;
    rotate: -160deg;
    z-index: 1;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  & > div:nth-child(3) {
    align-self: center;
    justify-self: center;
    margin-top: 170px;
  }
`;
