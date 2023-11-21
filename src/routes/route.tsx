import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsletterForm from "../pages/NewsletterForm/index.tsx";
import SuccessModal from "../pages/SuccessModal/index.tsx";

const RouteWrapper = () => {
  return (
    <Routes>
      <Route path="*" element={<NewsletterForm />}></Route>
      <Route path="/success" element={<SuccessModal />}></Route>
    </Routes>
  );
};

export default RouteWrapper;
