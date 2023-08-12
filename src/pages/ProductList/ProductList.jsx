import React, { useContext, useEffect } from "react";
import ProductHeader from "../../components/ProductHeader/ProductHeader";
import { InventoryContext } from "../../contexts/InventoryContext";
import "./ProductList.css";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { departmentName } = useParams();

  const {
    state: { inventoryData },
    filteredProducts,
    dispatch,
  } = useContext(InventoryContext);

  useEffect(() => {
    dispatch({
      type: "UPDATE_FILTERS",
      payload: { key: "filterByDept", value: departmentName },
    });
  }, []);

  return (
    <div>
      <ProductHeader />
      <table className="table-products">
        <tr className="tr-head">
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>
        {filteredProducts.map((product) => {
          const { id, name, imageUrl, description, price, stock, supplier } =
            product;
          return (
            <>
              <tr>
                <td>
                  <img src={imageUrl} alt="product" className="product-image" />
                </td>
                <td>{name}</td>
                <td>{description}</td>
                <td>${price}</td>
                <td>{stock}</td>
                <td>{supplier}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default ProductList;
