import React from "react";
import DashboardRoot from "../root";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "../pages/error";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardRoot />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routing;
