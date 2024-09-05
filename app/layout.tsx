import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/provider";
import "@rainbow-me/rainbowkit/styles.css"
const SpaceGrotsek = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-gotsek",
});





export const metadata: Metadata = {
  title: "SwiftSwap",
  description: "Swap any tokens in one click with SwiftSwap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={SpaceGrotsek.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>


    </html>
  );
}
