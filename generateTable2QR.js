const QRCode = require("qrcode");

const ip = "172.20.10.4"; // Replace with your actual local IP
const tableNumber = 2;
const url = `http://${ip}:3000/?table=${tableNumber}`;

QRCode.toFile(`table-${tableNumber}.png`, url, function (err) {
  if (err) throw err;
  console.log(`QR code for Table ${tableNumber} generated!`);
});
