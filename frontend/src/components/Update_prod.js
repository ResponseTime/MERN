import React from "react";
import { useLocation } from "react-router-dom";
export default function Update_prod(props) {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <div className="newinf">
        <form
          action={`https://items-api-v1-n89d.onrender.com/product/update/${location.state}`}
          method="post"
        >
          <input
            type="text"
            name="title"
            id=""
            placeholder="Enter Product Name"
          />
          <input
            type="number"
            name="price"
            id=""
            placeholder="Enter Product Price"
          />
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Product Description"
          ></textarea>
          <input
            type="text"
            name="category"
            id=""
            placeholder="Enter Product Category"
          />
          <input type="file" name="image" id="" />
          <input
            type="text"
            name="imageUrl"
            id=""
            value="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            hidden
          />
          <input type="submit" value="Submit product" />
        </form>
      </div>
    </>
  );
}
