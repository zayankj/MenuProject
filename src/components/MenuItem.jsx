"use client";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function MenuItem({ id, name, price }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({ id, name, price });
    toast.success(`${name} added to cart`);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded mb-2">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">₹{price}</p>
      </div>
      <button
        onClick={handleAdd}
        className="text-2xl px-3 py-1 bg-green-600 text-white rounded shadow"
      >
        🛒
      </button>
    </div>
  );
}
