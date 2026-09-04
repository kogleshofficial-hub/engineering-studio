import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENGINEERING STUDIO // Hardware × AI × Software",
  description: "An industrial engineering interface for integrated hardware, AI, IoT, and full-stack software systems.",
  applicationName: "Engineering Studio",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
