"use client";
import MenuItem from "@/components/MenuItem";

export default function Creams() {
  const items = [
    { id: "c1", name: "Nutella Cream", price: 250 },
    { id: "c2", name: "Kitkat Cream", price: 250 },
    { id: "c3", name: "Mango Creamsss", price: 250 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-bold">Creams</h2>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
