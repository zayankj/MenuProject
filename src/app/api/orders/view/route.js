import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "orders", "orders.json");

  try {
    const data = await fs.readFile(filePath, "utf8");
    const orders = JSON.parse(data);

    if (!Array.isArray(orders)) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(orders, { status: 200 });
  } catch (err) {
    console.error("Error reading orders.json:", err);
    return NextResponse.json([], { status: 500 });
  }
}
