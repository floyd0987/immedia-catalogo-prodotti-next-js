import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalogo Prodotti",
  description: "Catalogo Prodotti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
