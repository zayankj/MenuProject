import QRCode from "qrcode";

const ip = "172.20.10.4"; // Your local IP address
const tableNumber = 1;
const url = `http://${ip}:3000/?table=${tableNumber}`;

QRCode.toFile(`table-${tableNumber}.png`, url, function (err) {
  if (err) throw err;
  console.log(`QR code for Table ${tableNumber} generated!`);
});
