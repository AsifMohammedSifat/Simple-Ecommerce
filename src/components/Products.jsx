import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/action";
import { decreaseItem } from "../redux/product/actions";

const Products = () => {
  const products = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  // console.log(products);

  const handleAddToCart = (id, name, category, imageurl, price, quantity) => {
    if (quantity >= 1) {
      const alreadyInCart = cart.find((item) => item.pname === name);
      if (alreadyInCart) alert("Item already in cart");
      else {
        dispatch(addToCart(id, name, category, imageurl, price, quantity));
        dispatch(decreaseItem(id));
      }
    } else {
      alert("Product is not available. Sorry!");
    }
  };

  return (
    <div>
      <div className="productContainer" id="lws-productContainer">
        {products.length == 0 ? (
          <div>No Products Available</div>
        ) : (
          products.map((product) => {
            return (
              <div className="lws-productCard">
                <img
                  className="lws-productImage"
                  src={product.imageurl}
                  alt="product"
                />
                <div className="p-4 space-y-2">
                  <h4 className="lws-productName">{product.pname}</h4>
                  <p className="lws-productCategory">{product.category}</p>
                  <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                      BDT <span className="lws-price">{product.price}</span>
                    </p>
                    <p className="productQuantity">
                      QTY{" "}
                      <span className="lws-quantity">{product.quantity}</span>
                    </p>
                  </div>
                  <button
                    className="lws-btnAddToCart"
                    onClick={() =>
                      handleAddToCart(
                        product.id,
                        product.pname,
                        product.category,
                        product.imageurl,
                        product.price,
                        product.quantity
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
