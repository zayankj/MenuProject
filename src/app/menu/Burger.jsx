"use client";
import MenuItem from "@/components/MenuItem";

export default function Burger() {
  const items = [
    { id: "b1", name: "Veg Patty Burger", price: 80 },
    { id: "b2", name: "Broasted Burger", price: 80 },
    { id: "b3", name: "Broasted Burger with Cheese", price: 100 },
    { id: "b4", name: "Tikka Burger", price: 90 },
    { id: "b5", name: "Strips Burger", price: 100 },
    { id: "b6", name: "Double Broasted Burger", price: 120 },
    { id: "b7", name: "Ground Burger (NEW)", price: 120 },
    { id: "b8", name: "Double Melt Burger (NEW)", price: 160 },
    { id: "b9", name: "Nashville Burger (NEW)", price: 160 },
    { id: "b10", name: "Jumbo Burger", price: 200 },
    { id: "b11", name: "Extra Cheese", price: 20 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-bold">Burgers</h2>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
