import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Template";
// import CategoryPage from "./Navigation/CategoryPage";
// import ViewNews from "./Navigation/ViewNews";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Template />} />
        {/* <Route path="/:id/DetailedNews/:newsId" element={<ViewNews />} />
        <Route path="/:id/category/:category" element={<CategoryPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
