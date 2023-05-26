import styled from "styled-components";

export const CollapsesStyles = styled.div`
  width: 80%;
  max-width: 950px;
  margin: 2rem 0;
  & > div {
    & > div {
      font-family: "Fira Sans", sans-serif;

      //icon header
      & > div:nth-child(1) {
        display: flex;
        & > div {
          align-self: center;
          & > span > svg {
            font-size: 14px;
            color: #aaa;
          }
        }
        & > span {
          font-size: 1.7rem;
          font-weight: 500;
          color: #004a59;
        }
      }
      //content
      & > div:nth-child(2) {
        & > div {
          color: #004a59;

          border-bottom: 1px solid #ddd;
          & > p {
            font-size: 1.25rem;
            margin: 1rem 0;
          }
          //ordered list
          & > ol {
            margin-bottom: 2rem;
            & > li {
              display: flex;
              flex-direction: row;
              counter-increment: step-counter;
              list-style-type: none;
              margin: 1rem 0;
              & > p {
                font-size: 1.25rem;
                align-self: center;
              }
              & > h2 > span {
                font-size: 1.25rem;
                font-weight: 400;
              }
            }
            & > li::before {
              content: counter(step-counter);
              margin-right: 10px;
              font-size: 20px;
              font-weight: bold;

              /* padding: 3px 8px; */
            }
          }
          //unordered list
          & > ul {
            & > li {
              margin-left: 3rem;
              & > a {
                color: rgb(217, 0, 199);
                font-size: 1.25rem;
                margin: 1rem 0;
                border-bottom: 1px solid transparent;
                &:hover {
                  border-bottom: 1px solid rgb(217, 0, 199);
                }
              }
              & > p {
                font-size: 1.25rem;
                margin: 1rem 0;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1025px) {
    width: 100%;
    & > div {
      & > div {
        //icon header
        & > div:nth-child(1) {
          & > span {
            font-size: 1.7rem;
            font-weight: 500;
          }
        }
        //content
        & > div:nth-child(2) {
          & > div {
            & > p {
              font-size: 1rem;
            }
            //ordered list
            & > ol {
              & > li {
                & > p {
                  font-size: 1rem;
                }
                & > h2 > span {
                  font-size: 1rem;
                  font-weight: 400;
                }
              }
              & > li::before {
                content: counter(step-counter);
                font-size: 17px;
              }
            }
            //unordered list
            & > ul {
              & > li {
                & > a {
                  font-size: 1rem;
                }
                & > p {
                  font-size: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    width: 95%;
    & > div {
      & > div {
        //icon header
        & > div:nth-child(1) {
          & > span {
            font-size: 1.3rem;
            font-weight: 450;
          }
        }
        //content
        & > div:nth-child(2) {
          & > div {
            & > p {
              font-size: 1rem;
            }
            //ordered list
            & > ol {
              & > li {
                & > p {
                  font-size: 1rem;
                }
                & > h2 {
                  font-size: 1rem;
                  font-weight: 400;
                }
                & > h2 > span {
                  font-size: 1rem;
                  font-weight: 350;
                }
              }
            }
          }
        }
      }
    }
  }
`;
