import * as React from "react";
import Categories from "../components/CategoriesComponent";
import {Route, Routes} from "react-router-dom";
import {Home, PageNotFound, Properties} from "../components";
import AdminComponent from "../components/AdminComponent";

export default function AdminRoutes() {
  return (
      <Routes>
        <Route path="/" element={<AdminComponent />} />
        <Route path="/filter/" element={<AdminComponent />} />
      </Routes>
  );
}
