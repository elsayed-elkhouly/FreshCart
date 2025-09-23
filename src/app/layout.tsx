import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_Componants/Navbar/Navbar";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { Toaster } from "sonner";
import Provider from "@/Provider";
import Footer from "./_Componants/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Cart",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <Provider>
          <Navbar/>
        <Toaster />
        {children}
        <Footer/>
    </Provider>
      </body>
    </html>
  );
}
