"use client";
import MenuItem from "@/components/MenuItem";

export default function Rolls() {
  const items = [
    { id: "r1", name: "Chicken Roll", price: 40 },
    { id: "r2", name: "Chicken Roll W/C", price: 60 },
    { id: "r3", name: "Veg Roll W/C", price: 60 },
    { id: "r4", name: "BBQ Chicken Roll", price: 60 },
    { id: "r5", name: "Nugget Roll", price: 90 },
    { id: "r6", name: "Schezwan Chicken Roll", price: 90 },
    { id: "r7", name: "Veg Wrap", price: 90 },
    { id: "r8", name: "Corn & Capsicum Wrap", price: 90 },
    { id: "r9", name: "CC Special Roll", price: 90 },
    { id: "r10", name: "Chicken Wrap", price: 90 },
    { id: "r11", name: "Crispy Chicken Wrap", price: 90 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-bold">Rolls & Wraps</h2>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
