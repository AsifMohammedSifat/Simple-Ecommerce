import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const cart = useSelector((state)=>state.cart);
  console.log(cart);
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link to="/" className="text-white">
          EmaZon
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </Link>
          <Link to="/cart" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
