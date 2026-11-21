import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
