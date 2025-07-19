"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  const [tableNumber, setTableNumber] = useState("unknown");

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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={`/?table=${tableNumber}`}>
          <h1 className="text-2xl font-bold text-green-600">☕ CoolCafe</h1>
        </Link>
        <Link href={`/cart?table=${tableNumber}`} className="relative text-2xl">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
