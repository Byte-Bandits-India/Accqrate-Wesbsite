// app/layout.tsx
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LoadingProvider } from "./business/books/sections/utils/LoadingContext";
import { CountryProvider } from "../contexts/CountryContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "ACQRATE",
  description: "Business and Retail Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <CountryProvider>
          <LoadingProvider>
            <Header />
            {children}
            <Footer />
          </LoadingProvider>
        </CountryProvider>
      </body>
    </html>
  );
}