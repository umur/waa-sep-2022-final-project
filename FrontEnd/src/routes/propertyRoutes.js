import * as React from "react";
import Properties from "../components/propertiesComponent";
import {Route, Routes} from "react-router-dom";
import CreatePropertyComponent from "../components/createPropertyComponent";
import PropertyComponent from "../components/propertyComponent";

export default function PropertyRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/:id" element={<PropertyComponent />} />
        <Route path="/new" element={<CreatePropertyComponent />} />
      </Routes>
  );
}
