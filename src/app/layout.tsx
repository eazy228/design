import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SolidChange — обмен криптовалют без скрытых комиссий",
  description:
    "Прозрачный обменник криптовалют: открытые резервы on-chain, AML-проверка, среднее время обмена 7 минут.",
  metadataBase: new URL("https://solidchange.online"),
  openGraph: {
    title: "SolidChange — обмен криптовалют без скрытых комиссий",
    description:
      "Прозрачный обменник криптовалют: открытые резервы on-chain, AML-проверка, среднее время обмена 7 минут.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-text-primary">{children}</body>
    </html>
  );
}
