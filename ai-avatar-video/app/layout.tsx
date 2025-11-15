import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Avatar Video Presentation",
  description: "AI-powered avatar with dynamic B-roll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
