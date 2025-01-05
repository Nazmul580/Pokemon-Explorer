import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="px-5 sm:px-0">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
