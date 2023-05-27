import React from "react";
import { HistoryStyles } from "../styles/history/history-styles";
import { Footer, HelpBtn, Nav } from "../indexs";
import { BodyHistory } from "../components/history/body-history";

export const History = () => {
  return (
    <HistoryStyles>
      <Nav />
      <BodyHistory />
      <Footer />
      <HelpBtn />
    </HistoryStyles>
  );
};
