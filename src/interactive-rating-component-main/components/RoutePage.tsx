import React from "react";
import RatingPage from "./RatingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ThanksPage from "./ThanksPage";
const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/rating-page" />} />
      <Route path="/rating-page" element={<RatingPage />} />
      <Route path="/thanks" element={<ThanksPage />} />
    </Routes>
  );
};

export default RoutePage;
