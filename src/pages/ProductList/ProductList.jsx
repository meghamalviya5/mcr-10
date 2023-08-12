import React, { useContext } from "react";
import ProductHeader from "../../components/ProductHeader/ProductHeader";
import { InventoryContext } from "../../contexts/InventoryContext";
import "./ProductList.css";

const ProductList = () => {
  const {
    state: { inventoryData },
    filteredProducts,
  } = useContext(InventoryContext);

  return (
    <div>
      <ProductHeader />
      <table>
        <tr>
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
