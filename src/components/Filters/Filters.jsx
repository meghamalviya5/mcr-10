import React, { useContext } from "react";
import { InventoryContext } from "../../contexts/InventoryContext";

const Filters = () => {
  const { dispatch, departments } = useContext(InventoryContext);

  return (
    <div>
      <div>
        <div>
          <select
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTERS",
                payload: { key: "filterByDept", value: e.target.value },
              })
            }
          >
            <option>All Departments</option>
            {departments.map((department) => (
              <option value={department}>{department}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              console.log(e.target.checked, "        ====e.target.checked");
              dispatch({
                type: "UPDATE_FILTERS",
                payload: { key: "filterByLowStock", value: e.target.checked },
              });
            }}
          />
          Low Stock Items
        </div>
        <div>
          <select
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTERS",
                payload: { key: "sortBy", value: e.target.value },
              })
            }
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;