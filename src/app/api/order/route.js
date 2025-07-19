import { writeFile, readFile, mkdir, access } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

// POST method to save a new order
export async function POST(request) {
  try {
    const data = await request.json();
    const { table, items, total } = data;

    if (!table || !items || items.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ordersDir = path.join(process.cwd(), "orders");
    const filePath = path.join(ordersDir, "orders.json");

    await mkdir(ordersDir, { recursive: true });

    let existingOrders = [];
    try {
      await access(filePath);
      const content = await readFile(filePath, "utf-8");
      existingOrders = JSON.parse(content);
    } catch (err) {
      existingOrders = [];
    }

    const newOrder = {
      timestamp: new Date().toISOString(),
      table,
      total,
      items,
    };
    existingOrders.push(newOrder);

    await writeFile(filePath, JSON.stringify(existingOrders, null, 2));

    return NextResponse.json({ success: true, message: "Order saved!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}

// DELETE method to clear all orders
export async function DELETE() {
  try {
    const ordersDir = path.join(process.cwd(), "orders");
    const filePath = path.join(ordersDir, "orders.json");

    // Overwrite the file with an empty array
    await writeFile(filePath, JSON.stringify([], null, 2));

    return NextResponse.json({ success: true, message: "All orders cleared!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to clear orders", details: err.message },
      { status: 500 }
    );
  }
}
