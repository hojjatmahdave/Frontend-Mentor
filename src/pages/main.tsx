import React from "react";
import { MainStyles } from "../styles/main/main-styles";
import {
  FifthSection,
  FirstSection,
  Footer,
  FourthSection,
  HelpBtn,
  Nav,
  SecondeSection,
  ThirdSection,
} from "../indexs";
export const Main = () => {
  return (
    <MainStyles>
      <Nav />
      <FirstSection />
      <SecondeSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
      <HelpBtn />
    </MainStyles>
  );
};
