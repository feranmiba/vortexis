import type React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
import OTP from "@/public/assets/amico.jpg";

export const metadata: Metadata = {
  title: "sign in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex justify-center md:w-1/2 md:flex-shrink-0">
            <Image
              src={OTP}
              className="h-auto w-full max-w-md object-contain p-4"
              alt="Logo"
              priority
            />
          </div>
          <div className="w-full relative p-4 sm:p-6 md:w-3/4 md:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
