import "./globals.css";

export const metadata = {
  title: "Mercado Verde | Agricultura em Moçambique",
  description:
    "Marketplace agrícola que liga produtores, compradores e oportunidades em Moçambique.",
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
