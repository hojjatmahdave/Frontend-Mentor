import styled from "styled-components";

export const ProfileStyle = styled.div`
  background-color: #1d204b;
  width: 280px;
  height: 600px;
  border-radius: 1rem;

  & > div:nth-child(1) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 70%;
    padding: 2rem;
    background-color: #5746ea;
    border-radius: 1rem;
    & > img {
      width: 90px;
      height: 90px;
      border: 3px solid #ddd;
      border-radius: 50%;
    }
    & > p:nth-child(2) {
      font-size: 16px;
      color: #aaa;
      padding-top: 3rem;
    }
    & > p:nth-child(3) {
      font-size: 3rem;
      font-weight: 100;
      color: #eee;
    }
  }
  & > div:nth-child(2) {
    margin: 2rem;
    & > p {
      padding-bottom: 1rem;
      font-size: 20px;
      color: #6a6fa7;
      &:hover {
        cursor: pointer;
        color: #eee;
      }
    }
  }
`;
