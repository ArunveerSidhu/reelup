import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Old_Standard_TT, Lato } from "next/font/google";

// Configure the Old Standard TT font
const oldStandard = Old_Standard_TT({
  weight: ['400', '700'],
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable: "--font-old-standard",
  display: "swap",
});

// Configure the Lato font
const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reelup",
  description: "Social network for cinephiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full">
      <body className={`${oldStandard.variable} ${lato.variable} bg-white h-full m-0 p-0`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
