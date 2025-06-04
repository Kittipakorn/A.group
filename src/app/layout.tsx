import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_Thai({
  weight: '600',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A.Group",
  description: "ติดตั้งแอร์ ล้างแอร์ เดินสายไฟ โดยทีมช่างมืออาชีพ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
