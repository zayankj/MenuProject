import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const filePath = path.join(process.cwd(), "orders.json");
  await fs.writeFile(filePath, "[]", "utf-8");
  res.status(200).json({ message: "Orders cleared" });
}
