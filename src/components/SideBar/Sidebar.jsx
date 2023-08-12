import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <ul className="flex flex-dir-col flex-gap-4">
        <li>
          <NavLink className="link side-links" to="/">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="link side-links" to="/departments">
            Departments
          </NavLink>
        </li>
        <li>
          <NavLink className="link side-links" to="/productList/all">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
