import React, { useContext } from "react";
import { InventoryContext } from "../../contexts/InventoryContext";

const AddNewProduct = () => {
  const {
    state: { newProduct },
    departments,
    addProduct,
    dispatch,
  } = useContext(InventoryContext);

  return (
    <div>
      <h3>Add New Product</h3>
      <form onSubmit={(e) => addProduct(e)}>
        <div>
          <label htmlFor="dept">Department:</label>
          <select
            id="dept"
            name="dept"
            value={newProduct.department}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "department", value: e.target.value },
              })
            }
          >
            <option>Select Department</option>
            {departments.map((department) => (
              <option>{department}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "name", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="desc">Description:</label>
          <textarea
            cols="50"
            rows="5"
            id="desc"
            name="desc"
            value={newProduct.description}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "description", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "price", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={newProduct.stock}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "stock", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="sku"
            name="sku"
            value={newProduct.sku}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "sku", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="supplier">Supplier:</label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            value={newProduct.supplier}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "supplier", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="delivered">Delivered:</label>
          <input type="text" id="delivered" name="delivered" value={0} />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={newProduct.imageUrl}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FORM_DATA",
                payload: { key: "imageUrl", value: e.target.value },
              })
            }
          />
        </div>
        <button className="btn p-s" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
