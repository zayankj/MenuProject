"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders/view");
      const data = await res.json();

      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        console.error("Invalid orders format:", data);
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  const clearOrders = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all orders?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch("/api/order", {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        alert("All orders cleared.");
        fetchOrders(); // Refresh list
      } else {
        alert("Failed to clear orders.");
      }
    } catch (err) {
      console.error("Error clearing orders:", err);
      alert("Error clearing orders.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">📦 Orders Summary</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="mb-6 p-4 rounded-lg border shadow bg-white"
          >
            <p>
              🪑 <strong>Table:</strong> {order.table || "unknown"}
            </p>
            <p className="text-sm">
              🕒 <strong>Time:</strong>{" "}
              {new Date(order.timestamp).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>

            <p>
              💵 <strong>Total:</strong> ₹{order.total}
            </p>
            <div className="mt-2">
              {order.items.map((item, idx) => (
                <p key={idx}>
                  {item.name} x {item.qty} = ₹
                  {Number(item.price) * Number(item.qty)}
                </p>
              ))}
            </div>
          </div>
        ))
      )}

      <button
        onClick={clearOrders}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
      >
        Clear All Orders
      </button>
    </div>
  );
}
