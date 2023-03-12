import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './comps/home';
import Header from './comps/misc/header';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Header />} />

        <Route path="/*" element={<h2>Page 404, not found.</h2>} />
      </Routes>
    </BrowserRouter>
  )
}