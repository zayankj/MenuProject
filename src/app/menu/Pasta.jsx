"use client";
import MenuItem from "@/components/MenuItem";

export default function Pasta() {
  const items = [
    { id: "p1", name: "White Sauce Pasta", price: 180 },
    { id: "p2", name: "Red Sauce Pasta", price: 170 },
    { id: "p3", name: "Mixed Sauce Pasta", price: 190 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-bold">Pasta</h2>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
