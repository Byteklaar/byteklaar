import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Byteklaar",
  description: "Jouw oplossingen in een hapklare website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-display">{children}</body>
    </html>
  );
}
