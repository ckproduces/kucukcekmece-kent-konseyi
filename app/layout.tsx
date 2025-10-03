import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const font = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Küçükçekmece Kent Konseyi",
  description: "Küçükçekmece Kent Konseyi Resmi Web Sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
