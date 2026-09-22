import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercado Verde",
  description:
    "Mercado Verde — plataforma de compra e venda de produtos agrícolas em Moçambique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
