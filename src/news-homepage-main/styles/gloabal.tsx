import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    * {
  padding: 0px !important;
  margin: 0 !important;
  box-sizing: border-box !important;

}
body {
  overflow: hidden !important;
  width: 100vh !important;
  height: 100vh !important;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');    font-family: 'Overpass', sans-serif;
  font-family: 'Inter', sans-serif;
}



`;
