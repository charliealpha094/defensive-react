import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import F16Page from "./routes/F16Page";
import RefurbishmentPage from "./routes/RefurbishmentPage";
import ContactPage from "./routes/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/f16" element={<F16Page />} />
      <Route path="/refurbishment" element={<RefurbishmentPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);
