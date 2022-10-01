import * as React from "react";
import Categories from "../components/CategoriesComponent";
import {Route, Routes} from "react-router-dom";
import {Home, PageNotFound, Properties} from "../components";

export default function CategoryRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:id" element={<Categories />} />
        <Route path="/filter/" element={<Categories />} />
      </Routes>
  );
}
