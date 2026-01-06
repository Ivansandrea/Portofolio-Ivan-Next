import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DynaPuff } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import Cursor from "./components/Cursor";


const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dyna",
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Porto Ivans",
  description: "Made by Ivans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={` ${dynaPuff.variable} antialiased min-h-screen `}>
          <Header />
          <Cursor />
          {children}
          <Footer />
      </body>
    </html>
  );
}
