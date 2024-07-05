import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Haqqimizda from "./components/Haqqimizda";
import Siyasetimiz from "./components/Siyasetimiz";
import Yenilikler from "./components/Yenilikler";
import Aksiyalar from "./components/Aksiyalar";
import BonusKart from "./components/BonusKart";
import Catalog from "./components/Catalog";
import AdsMarket from "./components/AdsMarket";
import Partners from "./components/Partners";
import BePartner from "./components/BePartner";
import AttBuyers from "./components/AttBuyers";
import Karyera from "./components/Karyera";
import Contact from "./components/Contact";
import Supermarket from "./components/Supermarket";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
import Category from "./components/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:cat" element={<Category />} />
          <Route path="/haqqimizda" element={<Haqqimizda />} />
          <Route path="/siyasetimiz" element={<Siyasetimiz />} />
          <Route path="/yenilikler" element={<Yenilikler />} />
          <Route path="/aksiyalar" element={<Aksiyalar />} />
          <Route path="/neptunbonuskart" element={<BonusKart />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/alicilarin-nezerine" element={<AttBuyers />} />
          <Route path="/partners" element={<BePartner />} />
          <Route path="/terefdaslar" element={<Partners />} />
          <Route path="/reklam" element={<AdsMarket />} />
          <Route path="/karyera" element={<Karyera />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/supermarketler" element={<Supermarket />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
