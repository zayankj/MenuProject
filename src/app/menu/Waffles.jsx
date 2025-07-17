"use client";
import MenuItem from "@/components/MenuItem";

export default function Waffles() {
  const items = [
    { id: "w1", name: "Single Scoop", price: 60 },
    { id: "w2", name: "Fruit Ice Cream", price: 80 },
    { id: "w3", name: "Mini Gudbud", price: 80 },
    { id: "w4", name: "Nutella Crunch", price: 100 },
    { id: "w5", name: "Naughty Nutty", price: 100 },
    { id: "w6", name: "Brownie with Ice Cream", price: 140 },
    { id: "w7", name: "Gudbud", price: 120 },
    { id: "w8", name: "Sizzling Brownie", price: 170 },
    { id: "w9", name: "Special Gudbud", price: 180 },
    { id: "w10", name: "Nutella Waffle (Half)", price: 150 },
    { id: "w11", name: "Nutella Waffle (Full)", price: 230 },
    { id: "w12", name: "KitKat Waffle (Half)", price: 180 },
    { id: "w13", name: "KitKat Waffle (Full)", price: 250 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-bold">Waffles & Ice Cream</h2>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
