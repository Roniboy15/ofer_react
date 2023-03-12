import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './comps/home';
import Header from './comps/misc/header';
import ShopPage from './comps/shop/shopPage';
import CounterRedux from './comps/test/counterRedux';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterRedux />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/*" element={<h2>Page 404, not found.</h2>} />
      </Routes>
    </BrowserRouter>
  )
}
