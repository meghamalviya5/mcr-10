import React, { useContext } from "react";
import { InventoryContext } from "../../contexts/InventoryContext";

const Dashboard = () => {
  const {
    state: { inventoryData },
  } = useContext(InventoryContext);

  const totalStocks = inventoryData.reduce((acc, curr) => acc + curr.stock, 0);

  const totalDelivered = inventoryData.reduce(
    (acc, curr) => acc + curr.delivered,
    0
  );

  const lowStockItems = inventoryData.reduce(
    (acc, curr) => (curr.stock <= 10 ? ++acc : acc),
    0
  );

  return (
    <div className="flex flex-gap-2">
      <div>
        <p>{totalStocks}</p>
        <p>Total Stocks</p>
      </div>
      <div>
        <p>{totalDelivered}</p>
        <p>Total Delivered</p>
      </div>
      <div>
        <p>{lowStockItems}</p>
        <p>Low Cost Stocks</p>
      </div>
    </div>
  );
};

export default Dashboard;
