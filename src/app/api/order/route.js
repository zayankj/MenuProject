import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

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

    // Folder to store orders
    const ordersDir = path.join(process.cwd(), "orders");

    // Make sure the directory exists
    await mkdir(ordersDir, { recursive: true });

    // File path: e.g., orders/table-1.json
    const filePath = path.join(ordersDir, `table-${table}.json`);

    // Order data to save
    const orderData = {
      timestamp: new Date().toISOString(),
      table,
      total,
      items,
    };

    // Save order as JSON
    await writeFile(filePath, JSON.stringify(orderData, null, 2));

    return NextResponse.json({ success: true, message: "Order saved!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}
