import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/actions";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    pname: "",
    category: "",
    price: 0,
    imageurl: "",
    quantity: 0,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(addProduct(formData));
  };
  return (
    <div>
      <div>
        {/* <!-- Product Input Form --> */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form
            className="space-y-4 text-[#534F4F]"
            id="lws-addProductForm"
            onSubmit={handleSubmit}
          >
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input
                onChange={handleChange}
                value={formData.pname}
                name="pname"
                className="addProductInput"
                id="lws-inputName"
                type="text"
                required
              />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label for="lws-inputCategory">Category</label>
              <input
                onChange={handleChange}
                value={formData.category}
                name="category"
                className="addProductInput"
                id="lws-inputCategory"
                type="text"
                required
              />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label for="lws-inputImage">Image Url</label>
              <input
                onChange={handleChange}
                value={formData.imageurl}
                name="imageurl"
                className="addProductInput"
                id="lws-inputImage"
                type="text"
                required
              />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label for="ws-inputPrice">Price</label>
                <input
                  name="price"
                  onChange={handleChange}
                  value={formData.price}
                  className="addProductInput"
                  type="number"
                  id="lws-inputPrice"
                  required
                />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label for="lws-inputQuantity">Quantity</label>
                <input
                  onChange={handleChange}
                  value={formData.quantity}
                  name="quantity"
                  className="addProductInput"
                  type="number"
                  id="lws-inputQuantity"
                  required
                />
              </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">
              Add Product
            </button>
          </form>
        </div>
        {/* <!-- Product Input Form Ends --> */}
      </div>
    </div>
  );
};

export default AddProduct;
