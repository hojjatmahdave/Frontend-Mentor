import styled, { createGlobalStyle } from "styled-components";

export const SliderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > a {
    width: 100%;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
      background-color: rgba(3, 155, 185, 0.329);
      border-radius: 0.5rem;
    }
    & > p {
      color: black;
      margin: 0.5rem 0;
      color: rgb(0, 74, 89);
    }
    & > h6 {
      color: black;
      font-size: 1.5rem;
      font-weight: 650;
      margin: 0.5rem 0;
      color: rgb(0, 74, 89);
    }
  }
`;
export const SliderGloabalStyle = createGlobalStyle`
.ant-drawer-header-title{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;


}

 .ant-dropdown-trigger{
display: flex;
flex-direction: row;
align-items: center;
justify-content: start;
cursor: pointer;
&>p{
    margin: 0 0.3rem;
}
}
.ant-dropdown-menu{
   border: 0.5px solid #d3d3d3 !important ;
}
.ant-drawer-content-wrapper, .ant-drawer-content{
    border-radius: 2rem 0 0 0 !important;

}
.ant-drawer-body{
    position: relative !important;
}


    

`;

export const ButtonStyle = styled.div`
  position: absolute;
  bottom: 0;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #d3d3d3;
  & > button {
    border: none;
    outline: none;
    width: 100%;
    padding: 0.7rem 1rem;
    margin: 1.5rem 0;
    border-radius: 1.5rem;
    background-color: #cbf200;
    color: rgb(0, 74, 89);
    font-family: "Poppins", sans-serif;
    font-size: medium;
    font-weight: 550;
    &:hover {
      opacity: 0.9;
      -webkit-transform: scale(0.99);
      -moz-transform: scale(0.99);
      transform: scale(0.99);
      cursor: pointer;
    }
  }
`;
