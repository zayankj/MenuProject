// src/app/orders/page.jsx
"use client";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders/view");
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      setOrders([]);
    }
  };

  const clearOrders = async () => {
    try {
      const res = await fetch("/api/orders/clear", { method: "POST" });
      if (res.ok) {
        alert("All orders cleared!");
        fetchOrders(); // Refresh the order list
      } else {
        alert("Failed to clear orders.");
      }
    } catch (error) {
      console.error("Error clearing orders:", error);
      alert("Error clearing orders.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🧾 Orders</h1>

      <button
        onClick={clearOrders}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear All Orders
      </button>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order, i) => (
          <div key={i} className="mb-4 border rounded-lg p-4 shadow bg-white">
            <p>
              <strong>🪑 Table:</strong> {order.table || "unknown"}
            </p>
            <p>
              <strong>🕒 Time:</strong>{" "}
              {order.timestamp
                ? new Date(order.timestamp).toLocaleString()
                : "N/A"}
            </p>
            <p>
              <strong>💵 Total:</strong> ₹{order.total || 0}
            </p>

            {Array.isArray(order.items) && order.items.length > 0 ? (
              <ul className="mt-2 list-disc list-inside">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} x {item.qty} = ₹{item.price * item.qty}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-500">No items in this order.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}
