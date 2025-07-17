import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "CoolCafe",
  description: "Cafe Menu App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        </CartProvider>
      </body>
    </html>
  );
}
