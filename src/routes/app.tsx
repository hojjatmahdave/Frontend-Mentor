import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { History, Main, Notfound, Topup } from "../indexs";
const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/history" element={<History />} />
      <Route path="/topup" element={<Topup />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
