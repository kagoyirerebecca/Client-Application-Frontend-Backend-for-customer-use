import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from 'react';



export const metadata: Metadata = {
  title: "Extension",
  description: "Extension that runs on all web browsers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
