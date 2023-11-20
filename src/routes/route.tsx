import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsletterForm from "../pages/NewsletterForm/index.tsx";

const RouteWrapper = () => {
  return (
    <Routes>
      <Route path="*" element={<NewsletterForm />}></Route>
    </Routes>
  );
};

export default RouteWrapper;
