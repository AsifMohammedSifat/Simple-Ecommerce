import React from "react";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <main className="py-16">
        <div className="productWrapper">
          <Products />
          <AddProduct />
        </div>
      </main>
    </div>
  );
};

export default Home;
