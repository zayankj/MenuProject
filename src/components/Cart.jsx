"use client";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-4 bg-gray-100 rounded mt-4">
      <h3 className="text-xl font-semibold mb-2">Cart Summary</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="space-y-1">
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.qty} = ₹{item.qty * item.price}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-2 font-bold">Total: ₹{total}</p>
    </div>
  );
}
