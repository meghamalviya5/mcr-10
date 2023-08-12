import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper">
      <aside className="flex flex-justify-center">
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
