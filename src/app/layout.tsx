import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Portfolio | Creative Developer",
  description: "A high-performance, visually stunning portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
