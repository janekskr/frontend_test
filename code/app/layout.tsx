import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { Header, Footer } from "@/components";

import "../styles/main.scss"

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
