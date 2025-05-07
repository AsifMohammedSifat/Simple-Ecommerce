import React from "react";
import Navbar from "./Navbar";
import BillDetails from "./BillDetails";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <CartItems/>

            {/* <!-- Bill Details --> */}
            <BillDetails/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
