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
  openGraph: {
    title: "A.Group",
    description: "ติดตั้งแอร์ ล้างแอร์ เดินสายไฟ โดยทีมช่างมืออาชีพ",
    url: "https://agroup-air.vercel.app",
    images: [
      {
        url: "images/logo.png",
        width: 630,
        height: 500,
        alt: "A.Group Logo",
      },
    ],
  },
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
