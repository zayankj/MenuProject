"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // 🔁 added

export default function CartPage() {
  const { cart, addItem, removeItem, clearCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const [tableNumber, setTableNumber] = useState("unknown");
  const router = useRouter(); // 🔁 added

  useEffect(() => {
    const table = new URLSearchParams(window.location.search).get("table");
    if (table) {
      localStorage.setItem("tableNumber", table);
      setTableNumber(table);
    } else {
      const stored = localStorage.getItem("tableNumber");
      if (stored) setTableNumber(stored);
    }
  }, []);

  const handleOrder = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    const confirm = window.confirm(
      "Are you sure you want to place this order?"
    );
    if (!confirm) return;

    const currentTable = localStorage.getItem("tableNumber") || tableNumber;

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: currentTable,
          items: cart,
          total,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(`✅ Order placed successfully!`);
        clearCart();
        router.push(`/order-confirmation?table=${currentTable}`);
      } else {
        toast.error(`❌ Failed: ${data.error}`);
      }
    } catch (err) {
      toast.error("❌ Network error");
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.qty} = ₹{item.qty * item.price}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 px-2 text-white rounded"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => addItem(item)}
                  className="bg-green-600 px-2 text-white rounded"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 text-right font-bold text-xl">Total: ₹{total}</div>

      {cart.length > 0 && (
        <button
          onClick={handleOrder}
          className="mt-6 w-full bg-green-700 text-white py-3 rounded text-lg font-semibold hover:bg-green-800 transition"
        >
          ✅ Submit Order
        </button>
      )}

      <Link
        href={`/?table=${tableNumber}`}
        className="text-green-600 underline mt-4 inline-block"
      >
        ← Back to Menu
      </Link>
    </div>
  );
}
