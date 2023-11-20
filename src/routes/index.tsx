import React from "react";
import { BrowserRouter } from "react-router-dom";

import RouteWrapper from "./route.tsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper />
    </BrowserRouter>
  );
};

export default Routes;
