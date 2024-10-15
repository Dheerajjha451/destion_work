import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from 'next-auth/react';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Destion Innovations',
  description: 'We are Creative Agency. We are team of talented designers making websites , mobile apps and cloud solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}