import React, { useEffect, useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./assets/index.scss";
import Layout from "./components/Layout";
import ItemPage from "./pages/ItemPage/ItemPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SupportPage from "./pages/SupportPage/SupportPage";
import TermsPage from "./pages/TermsPage/TermsPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <>
      <div className="special-bg"></div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="item" element={<ItemPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
