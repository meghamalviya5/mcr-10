import React, { useContext } from "react";
import { InventoryContext } from "../../contexts/InventoryContext";
import { Link } from "react-router-dom";

const Departments = () => {
  const { departments } = useContext(InventoryContext);

  return (
    <div className="flex flex-gap-2">
      {departments.map((department) => (
        <div>
          <Link to={`/productList/${department}`}>{department}</Link>
        </div>
      ))}
    </div>
  );
};

export default Departments;
