import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Website",
  description:
    "A website created entirely by DevDuetAI, a plugin for ChatGPT and for GitHub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
