import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { Header, Footer, Provider } from "@/components";

import "@/styles/main.scss";

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
    <html lang="pl">
      <body className={font.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
