import React from "react";
import { AppStyle } from "../styles/app-style";
import Profile from "../components/profile";
import AllCards from "../components/all-cards";

const App = () => {
  return (
    <AppStyle>
      <Profile />
      <AllCards />
    </AppStyle>
  );
};

export default App;
