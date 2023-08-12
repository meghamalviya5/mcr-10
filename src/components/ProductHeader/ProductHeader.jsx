import React from "react";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

const ProductHeader = () => {
  return (
    <div className="flex flex-space-between">
      <h3>Products</h3>
      <Filters />
      <Link className="link btn new-btn" to="/addNewProduct">
        New
      </Link>
    </div>
  );
};

export default ProductHeader;
