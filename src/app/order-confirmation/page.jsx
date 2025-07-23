"use client";

import { useEffect, useState } from "react";

export default function OrderPlacedPage() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLastOrder = async () => {
      try {
        const res = await fetch("/api/orders/view");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setOrder(data[data.length - 1]);
        } else {
          setOrder(null); // No orders found
        }
      } catch (error) {
        console.error("Failed to fetch order details:", error);
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    fetchLastOrder();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {loading ? (
        <div className="text-center text-xl font-semibold">
          Loading order details...
        </div>
      ) : order ? (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">
            📦 Order Placed Successfully!
          </h1>

          <div className="space-y-2">
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
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Ordered Items:</h2>
            <ul className="border-t border-b py-2">
              {order.items.map((item, index) => (
                <li key={index} className="flex justify-between py-1">
                  <span>
                    {item.name} x {item.qty}
                  </span>
                  <span>₹{Number(item.price) * Number(item.qty)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-green-600 font-semibold flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Your order has been placed. Please wait 5–10 minutes to be served.
            Thank you!
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">No order placed yet.</h1>
          <p className="mt-3">Please place an order to see the details here.</p>
        </div>
      )}
    </div>
  );
}
