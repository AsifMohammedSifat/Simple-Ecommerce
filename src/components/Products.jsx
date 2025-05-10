import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.product);
  // console.log(products);

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
                  <button className="lws-btnAddToCart">Add To Cart</button>
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
