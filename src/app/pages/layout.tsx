"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar/page";
import Hackathon_Navbar from "../components/Hackathon_Navbar/page";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  // const isHackathonRoute = pathname.startsWith("/pages/hackathon");

  return (
    <div>
      {/* {isHackathonRoute ? <Hackathon_Navbar /> : <Navbar />} */}
      {children}
    </div>
  );
}
