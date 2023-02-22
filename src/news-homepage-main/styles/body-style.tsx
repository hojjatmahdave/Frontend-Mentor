import styled from "styled-components";

export const BodyStyle = styled.div`
  max-width: max-content;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.8fr 0.3fr 0.3fr;
  h1 {
    grid-column: 1/2;
    font-weight: 800;
    font-size: 3.5rem;
  }
  @media screen and (max-width: 1480px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 780px) {
    h1 {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 580px) {
    gap: 1rem;
    h1 {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    h1 {
      grid-column: 1;
      grid-row: 2;
      line-height: 2.25rem;
      font-weight: 800;
      font-size: 2.3rem;
    }
  } ;
`;
export const LogoImgDesktop = styled.img`
  grid-column: 1/3;
  grid-row: 1/2;
  width: 100%;
  max-width: 100%;
  height: 100%;
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const LogoImgMobile = styled.img`
  display: none;
  @media screen and (max-width: 480px) {
    display: inline;
    grid-column: 1/3;
    grid-row: 1/2;
    width: 100%;
    max-width: 100%;
    height: 100%;
    src: ${({ src }) => src};
    alt: ${({ alt }) => alt};
  }
  grid-column: 1/3;
  grid-row: 1/2;
  width: 100%;
  max-width: 100%;
  height: 100%;
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;

export const ReadMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 2/3;
  grid-row: 2/3;
  padding: 1rem;
  line-height: 1.5rem;
  p {
    padding-bottom: 2rem;
    color: gray;
    font-family: "Inter", sans-serif;
    font-weight: 300;
  }
  button {
    border: none;
    outline: none;
    text-transform: uppercase;
    background-color: #f15d51;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 3px;
    padding: 1rem 2rem;
    cursor: pointer;
    align-self: flex-start;
    &:hover {
      color: #fff;
      background-color: #00001a;
    }
  }
  @media screen and (max-width: 960px) {
    padding: 0.5rem;
    p {
      font-size: 0.8rem;
    }
    button {
      font-size: 0.6rem;
      font-weight: 300;
      letter-spacing: 2px;
      padding: 0.5rem 1rem;
    }
  }
  @media screen and (max-width: 780px) {
    padding: 0.5rem;
    line-height: 1rem;
    p {
      font-size: 0.6rem;
    }
    button {
      font-size: 0.6rem;
      font-weight: 300;
      letter-spacing: 2px;
      padding: 0.5rem 1rem;
    }
  }
  @media screen and (max-width: 580px) {
    p {
      font-size: 0.5rem;
    }
    button {
      font-size: 0.4rem;
      letter-spacing: 1.5px;
      padding: 0.3rem 0.8rem;
    }
  }
  @media screen and (max-width: 480px) {
    grid-column: 1;
    grid-row: 3;
    line-height: 1.5rem;
    padding: 1rem 0;
    p {
      font-size: 1rem;
    }
    button {
      font-size: 0.8rem;
      letter-spacing: 2.5px;
      padding: 0.8rem 2.2rem;
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    h1 {
      color: lightgray;
      font-weight: 700;
      font-size: 2rem;
    }
    h3 {
      font-weight: 800;
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        color: tomato;
      }
    }
    p {
      color: gray;
      width: 70%;
    }
  }
  @media screen and (max-width: 1480px) {
    line-height: 1.5rem;
    & > div {
      h3 {
        font-size: 1.1rem;
      }
      p {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1250px) {
    & > div {
      h3 {
        font-size: 1rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
  @media screen and (max-width: 960px) {
    line-height: 1rem;
    & > div {
      h1 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 0.7rem;
      }
      p {
        width: 100%;
        font-size: 0.6rem;
      }
    }
  }
  @media screen and (max-width: 780px) {
    line-height: 1rem;
    & > div {
      h1 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.5rem;
      }
      p {
        font-size: 0.4rem;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 580px) {
    line-height: 0.8rem;
    & > div {
      h1 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.4rem;
      }
      p {
        font-size: 0.35rem;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 480px) {
    line-height: 1.8rem;
    & > div {
      h1 {
        font-weight: 700;
        font-size: 2rem;
      }
      h3 {
        font-weight: 800;
        font-size: 1rem;
      }
      p {
        width: 100%;
        font-size: 0.95rem;
      }
    }
  }
`;
export const Pcs = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  @media screen and (max-width: 480px) {
    grid-column: 1;
    grid-row: 5;
  }
`;
export const Laptops = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  @media screen and (max-width: 480px) {
    grid-column: 1;
    grid-row: 6;
  }
`;
export const Gaming = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;
  @media screen and (max-width: 480px) {
    grid-column: 1;
    grid-row: 7;
  }
`;
export const ImageCard = styled.img`
  padding-right: 1rem;
  height: 150px;
  cursor: pointer;

  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
  @media screen and (max-width: 960px) {
    height: 120px;
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 780px) {
    height: 100px;
  }
  @media screen and (max-width: 580px) {
    height: 80px;
  }
  @media screen and (max-width: 480px) {
    padding-right: 1rem;
    height: 150px;
    width: auto;
  }
`;
export const NewStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00001a;
  padding: 2rem;
  grid-column: 3;
  grid-row: 1/3;

  h1 {
    cursor: pointer;
    color: #e9b262;
    font-weight: 700;
    font-size: 2.5rem;
  }
  & > div {
    line-height: 1.5rem;
    padding: 1.5rem 0rem;
    border-bottom: 1px solid #7e7e7e;
    h3 {
      font-weight: 700;
      font-size: 1.3rem;
      padding-bottom: 1rem;
      cursor: pointer;
      color: #fff;
      &:hover {
        color: #e9b262;
      }
    }
    p {
      color: #b3b3b3;
    }
  }
  div:nth-child(4) {
    border-bottom: none;
  }
  @media screen and (max-width: 1480px) {
    padding: 1.5rem;
    & > div {
      line-height: 1.1rem;
      padding: 0.8rem 0rem;

      h3 {
        font-size: 1rem;
        /* padding-bottom: 0.4rem; */
      }
      p {
        font-size: 0.7;
      }
    }
  }
  @media screen and (max-width: 960px) {
    padding: 1rem;
    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }
    & > div {
      padding: 0.5rem 0rem;
      h3 {
        font-size: 0.8rem;
        padding-bottom: 1rem;
      }
      p {
        font-size: 0.6rem;
      }
    }
  }
  @media screen and (max-width: 780px) {
    padding: 1rem;
    h1 {
      font-weight: 700;
      font-size: 1.4rem;
    }
    & > div {
      padding: 0.3rem 0rem;
      h3 {
        font-size: 0.6rem;
        padding-bottom: 0.5rem;
      }
      p {
        font-size: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 580px) {
    padding: 0.8rem;
    h1 {
      font-weight: 700;
      font-size: 1rem;
    }
    & > div {
      line-height: 0.8rem;
      padding: 0.8rem 0rem;
      h3 {
        font-size: 0.5rem;
        padding-bottom: 0rem;
      }
      p {
        font-size: 0.4rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    grid-column: 1;
    grid-row: 4;
    padding: 1.5rem;
    margin: 1rem 0;
    h1 {
      font-weight: 700;
      font-size: 2rem;
    }
    & > div {
      line-height: 1.5rem;
      padding: 1.5rem 0rem;
      h3 {
        font-weight: 700;
        font-size: 1.2rem;
        padding: 0 0 1rem 0;
      }
      p {
        color: #b3b3b3;
        font-size: 0.9rem;
      }
    }
  }
`;
