import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Singh | Java Developer Portfolio",
  description: "A professional portfolio of Aman Singh, featuring full-stack development and Java expertise.",
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
