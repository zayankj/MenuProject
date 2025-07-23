import QRCode from "qrcode";
import fs from "fs";

// Replace localhost with your machine's IP address
const adminLoginUrl = "http://172.20.10.4:3000/admin";
const qrCodeFilePath = "./admin-qr.png";

QRCode.toFile(
  qrCodeFilePath,
  adminLoginUrl,
  {
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
  function (err) {
    if (err) throw err;
    console.log(`Admin login QR code saved to ${qrCodeFilePath}`);
  }
);
