import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import DetailsPage from "../pages/DeatialsPage";
import FavouritPage from "../pages/FavouritPage";
import HomePage from "../pages/HomePage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:pokemonName" element={<DetailsPage />} />
          <Route path="/Favourit" element={<FavouritPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
