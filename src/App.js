import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Departments from "./pages/Departments/Departments";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AddNewProduct from "./pages/AddNewProduct/AddNewProduct";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="departments" element={<Departments />} />
          <Route path="productList/:departmentName" element={<ProductList />} />
          <Route path="addNewProduct" element={<AddNewProduct />} />
          <Route path="productDetails" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
