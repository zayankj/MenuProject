import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  const newOrder = await req.json();
  const filePath = path.join(process.cwd(), "orders.json");

  try {
    let existingOrders = [];

    try {
      const fileData = await fs.readFile(filePath, "utf8");
      existingOrders = JSON.parse(fileData);
    } catch (e) {
      // if file doesn't exist, keep empty array
    }

    existingOrders.push(newOrder);

    await fs.writeFile(
      filePath,
      JSON.stringify(existingOrders, null, 2),
      "utf8"
    );

    return new Response(JSON.stringify({ message: "Order saved" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error saving order" }), {
      status: 500,
    });
  }
}
