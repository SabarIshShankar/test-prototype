import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";
import Discounts from "./Discounts";
import LeadCapture from './LeadCapture'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/room" element={<Discounts />} />
        <Route path="/modal" element={<LeadCapture/>}/>
      </Routes>
    </BrowserRouter>
  );
}
