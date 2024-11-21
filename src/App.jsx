import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Page/Home/Home";
import PageNotFound from "./components/Page/error/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
