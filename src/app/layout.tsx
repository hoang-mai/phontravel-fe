import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhonTravel - Những Chuyến Phiêu Lưu Của Nhóm",
  description: "Blog về kỷ niệm du lịch của nhóm bạn",
  openGraph:{
    title: "PhonTravel - Những Chuyến Phiêu Lưu Của Nhóm",
    description: "Blog về kỷ niệm du lịch của nhóm bạn",
    url: "https://phontravel-fe.vercel.app/",
    siteName: "PhonTravel",
    images: [
      {
        url: "https://phontravel.vercel.app/Logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <AnimatedBackground>
      <Navbar/>
      {children}
    </AnimatedBackground>

    </body>
    </html>
  );
}
