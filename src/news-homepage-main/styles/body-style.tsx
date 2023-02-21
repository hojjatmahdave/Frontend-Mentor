import styled from "styled-components";

export const BodyStyle = styled.div`
  max-width: max-content;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr 0.8fr;
  grid-template-rows: 0.8fr 0.3fr 0.3fr;
  h1 {
    grid-column: 1/2;
    padding-right: 1rem 3rem 0 0;
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 45px;
  }
`;
export const LogoImg = styled.img`
  grid-column: 1/3;
  grid-row: 1/2;
  max-width: 100%;
  height: auto;
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;
export const ReadMore = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  /* text-align: left; */
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
  }
`;
export const CardsStyle = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
    div {
      line-height: 2rem;
      h1 {
        color: lightgray;
        font-weight: 700;
      }
      h3 {
        font-weight: 800;
      }
      p {
        color: gray;
      }
    }
  }
`;
export const ImageCard = styled.img`
  padding-right: 1rem;
  height: 150px;

  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;
export const NewStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00001a;
  padding: 2rem 2rem 0 2rem;
  grid-column: 3;
  grid-row: 1/3;
  overflow: visible;
  /* height: max-content; */
  /* min-height: max-content; */
  h1 {
    cursor: pointer;
    color: #e9b262;
    padding: 1rem 0;
  }
  & > div {
    padding: 2rem 0 0 0;
    line-height: 2rem;
    padding-bottom: 1rem;
    h2 {
      cursor: pointer;

      color: #fff;
    }
    p {
      color: gray;
    }
  }
`;
