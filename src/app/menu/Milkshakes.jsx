"use client";
import MenuItem from "@/components/MenuItem";

export default function Milkshakes() {
  const items = [
    { id: "m1", name: "Oreo", price: 60 },
    { id: "m2", name: "Shamam", price: 60 },
    { id: "m3", name: "Mixed Fruit", price: 60 },
    { id: "m4", name: "Chikkoo", price: 60 },
    { id: "m5", name: "Anjeer", price: 80 },
    { id: "m6", name: "Nutella Oreo", price: 80 },
    { id: "m7", name: "Dryfruits / Fruits N Nuts", price: 90 },
    { id: "m8", name: "Vanilla Shake / Irish Chocolate", price: 90 },
    { id: "m9", name: "Chocolate Shake", price: 90 },
    { id: "m10", name: "Choco Dry Fruits", price: 100 },
    { id: "m11", name: "Brownie/Belgian Chocolate", price: 120 },
    { id: "m12", name: "Nutella/Kitkat Shake", price: 140 },
    { id: "m13", name: "Nutty Nutella", price: 140 },
    { id: "m14", name: "Roasted Almond (Vanilla and Chocolate)", price: 140 },
    { id: "m15", name: "Seetaphal (Seasonal)", price: 90 },
    { id: "m16", name: "Mango (Seasonal)", price: 90 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-bold">Milkshakes</h2>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
