import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Портфолио дизайнера",
  description: "Портфолио дизайнера: избранные проекты и контакты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
