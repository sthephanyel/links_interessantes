import type { Metadata } from "next";
import {  Irish_Grover } from "next/font/google";
import "./globals.css";
import { LibUrqlChildren } from "@/lib/libUrqlChildren";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const IrishGrover:NextFontWithVariable = Irish_Grover({
  weight:'400',
  subsets: ['latin'],
  variable: '--font-iris',
})

export const metadata: Metadata = {
  title: "Dash",
  description: "Encontre sites interessantes rápidos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IrishGrover.variable} antialiased`}
      >
        <LibUrqlChildren>
          {children}
        </LibUrqlChildren>
      </body>
    </html>
  );
}
