import styled from "styled-components";

export const BodyStyle = styled.div`
  max-width: max-content;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.8fr 0.3fr 0.3fr;
  h1 {
    grid-column: 1/2;
    /* width: 400px; */
    font-weight: 800;
    font-size: 4rem;
  }
`;
export const LogoImg = styled.img`
  grid-column: 1/3;
  grid-row: 1/2;
  width: 100%;
  max-width: 100%;
  height: 100%;
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;
export const ReadMore = styled.div`
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
  }
`;
// export const CardsStyle = styled.div`
//   grid-column: 1/4;
//   grid-row: 3/4;
//   display: flex;
//   flex-direction: row;
//   & > div {
//     display: flex;
//     flex-direction: row;
//     div {
//       line-height: 2rem;
//       h1 {
//         color: lightgray;
//         font-weight: 700;
//       }
//       h3 {
//         font-weight: 800;
//       }
//       p {
//         color: gray;
//       }
//     }
//   }
// `;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    display: flex;
    flex-direction: column;

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
export const Pcs = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
`;
export const Laptops = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
`;
export const Gaming = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;
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
  padding: 2.5rem;
  grid-column: 3;
  grid-row: 1/3;

  h1 {
    cursor: pointer;
    color: #e9b262;
    font-weight: 700;
    padding: 0.5rem 0;
  }
  & > div {
    line-height: 1.6rem;
    padding: 1.5rem 0;
    h3 {
      font-weight: 700;
      font-size: 1.3rem;
      color: #fff;
      padding-bottom: 1rem;
      cursor: pointer;
    }
    p {
      color: #b3b3b3;
      line-height: 1.5rem;
      padding-bottom: 1rem;
    }
  }
`;
