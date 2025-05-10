import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementItem, deleteItem, incrementItem } from "./../redux/cart/action";

const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    console.log(id);
    dispatch(incrementItem(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleDelete = (id) =>{
    dispatch(deleteItem(id));
  }

  return (
    <div>
      <div className="space-y-6">
        {/* <!-- Cart Item --> */}
        {cart.length == 0 ? (
          <div>No Product Added to Cart</div>
        ) : (
          cart.map((item) => {
            return (
              <div>
                <div className="cartCard">
                  <div className="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <img
                      className="lws-cartImage"
                      src={item.imageurl}
                      alt="product"
                    />
                    {/* <!-- cart item info --> */}
                    <div className="space-y-2">
                      <h4 className="lws-cartName">{item.pname}</h4>
                      <p className="lws-cartCategory">{item.category}</p>
                      <p>
                        BDT <span className="lws-cartPrice">{item.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div className="flex items-center space-x-4">
                      <button
                        disabled={item.productQuantity > item.quantity}
                        className={`lws-incrementQuantity ${
                          item.productQuantity > item.quantity &&
                          "text-gray-500"
                        }`}
                        onClick={() => handleIncrement(item.id)}
                      >
                        <i className="text-lg fa-solid fa-plus"></i>
                      </button>
                      <span className="lws-cartQuantity">
                        {item.productQuantity}
                      </span>
                      <button
                        disabled={item.productQuantity <= 1}
                        className={`lws-decrementQuantity ${
                          item.productQuantity <=1 &&
                          "text-gray-500"
                        }`}
                        onClick={() => handleDecrement(item.id)}
                      >
                        <i className="text-lg fa-solid fa-minus"></i>
                      </button>
                    </div>
                    {/* <!-- price --> */}
                    <p className="text-lg font-bold">
                      BDT{" "}
                      <span className="lws-calculatedPrice">
                        {item.productQuantity * item.price}
                      </span>
                    </p>
                  </div>
                  {/* <!-- delete button --> */}
                  <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button className="lws-removeFromCart" onClick={()=>handleDelete(item.id)}>
                      <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* <!-- Cart Items Ends --> */}
      </div>
    </div>
  );
};

export default CartItems;
