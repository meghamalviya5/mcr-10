import { createContext, useReducer } from "react";
import { inventoryData } from "../db/data";
import { inventoryReducer } from "../reducers/InventoryReducer";

export const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const initialState = {
    inventoryData: localStorage.getItem("InventoryData")
      ? JSON.parse(localStorage.getItem("InventoryData"))
      : inventoryData,
    filters: { filterByDept: "all", filterByLowStock: false, sortBy: "name" },
    newProduct: {
      id: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    },
  };

  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  let filteredProducts = state.inventoryData;

  if (state.filters.filterByDept.length > 0) {
    if (state.filters.filterByDept !== "all") {
      filteredProducts = state.inventoryData.filter(
        (inventory) => inventory.department === state.filters.filterByDept
      );
    }
    if (state.filters.filterByDept === "all") {
      filteredProducts = state.inventoryData;
    }
  }

  if (state.filters.filterByLowStock === true) {
    filteredProducts = filteredProducts.filter(
      (product) => product.stock <= 10
    );
  }
  console.log(
    state.filters.filterByLowStock,
    "     ====state.filters.filterByLowStock"
  );

  if (state.filters.sortBy.length > 0) {
    if (state.filters.sortBy === "name") {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (state.filters.sortBy === "price") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (state.filters.sortBy === "stock") {
      filteredProducts = filteredProducts.sort((a, b) => a.stock - b.stock);
    }
  }

  const clearFormData = (product) => {
    dispatch({ type: "CLEAR_DATA", payload: product });
  };

  const addProduct = (e) => {
    e.preventDefault();
    //const formData = new FormData(e.target);

    const maxId = state.inventoryData.reduce(
      (acc, inventory) => (inventory.id > acc ? inventory.id : acc),
      0
    );

    state.newProduct = { ...state.newProduct, id: maxId + 1 };

    const updatedInventoryData = [...state.inventoryData, state.newProduct];

    // if (!localStorage.getItem("InvertoryData")) {
    localStorage.setItem("InventoryData", JSON.stringify(updatedInventoryData));
    // }

    state.newProduct = {
      id: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    };
    dispatch({ type: "ADD_NEW_PRODUCT", payload: updatedInventoryData });
    clearFormData(state.newProduct);
  };

  const departments = [
    ...new Set(state.inventoryData.map(({ department }) => department)),
  ];

  const valueProps = {
    state,
    dispatch,
    departments,
    filteredProducts,
    addProduct,
  };

  return (
    <InventoryContext.Provider value={valueProps}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
