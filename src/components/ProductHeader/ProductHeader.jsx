import React from "react";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

const ProductHeader = () => {
  return (
    <div className="flex flex-space-between">
      <h3>Products</h3>
      <Filters />
      <div className="btn p-s">
        <Link className="link " to="/addNewProduct">
          New
        </Link>
      </div>
    </div>
  );
};

export default ProductHeader;
