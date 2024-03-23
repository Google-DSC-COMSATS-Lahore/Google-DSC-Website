import type { Metadata } from "next";
import CursorFollower from "@/components/Cursor";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";

import localFont from "next/font/local";
const objectSans = localFont({ src: "../fonts/ObjectSans-Regular.otf" });

declare module "next";

export const metadata: Metadata = {
  title: "Google DSC Comsats Lahore",
  description: "The best GDSC in Lahore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${objectSans.className} bg-[#ebebeb]`}>
        <CursorFollower />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
