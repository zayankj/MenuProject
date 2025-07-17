"use client";
import Header from "@/components/Header";
import Waffles from "./menu/Waffles";
import Pasta from "./menu/Pasta";
import Burger from "./menu/Burger";
import Rolls from "./menu/Rolls";
import Creams from "./menu/Creams";
import Milkshakes from "./menu/Milkshakes";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-4">
        <Burger />
        <Rolls />
        <Milkshakes />
        <Waffles />
        <Pasta />
        <Creams />
      </main>
    </>
  );
}
