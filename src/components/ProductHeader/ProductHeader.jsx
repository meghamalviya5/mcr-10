import React from "react";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

const ProductHeader = () => {
  return (
    <div>
      <h3>Products</h3>
      <Filters />
      <Link to="/addNewProduct">New</Link>
    </div>
  );
};

export default ProductHeader;
