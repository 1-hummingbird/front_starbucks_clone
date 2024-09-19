import type { Metadata } from "next";
import "./globals.css";
import ScrollUpButton from "@/components/util/ScrollUpButton";

export const metadata: Metadata = {
  title: {
    template: "%s | Hummingbird",
    default: "Loading...",
  },
  description: "Spharos 5th Hummingbird",
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
        <ScrollUpButton />
      </body>
    </html>
  );
}
