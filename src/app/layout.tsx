import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Manrope,
  Montserrat,
  Oranienbaum,
  Playfair_Display,
  Prata,
  Unbounded,
} from "next/font/google";
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

const playfair = Playfair_Display({
  variable: "--font-logo-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-logo-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-logo-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const prata = Prata({
  variable: "--font-logo-prata",
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-logo-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const oranienbaum = Oranienbaum({
  variable: "--font-logo-oranienbaum",
  subsets: ["latin", "cyrillic"],
  weight: "400",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${unbounded.variable} ${manrope.variable} ${prata.variable} ${montserrat.variable} ${oranienbaum.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-text-primary">{children}</body>
    </html>
  );
}
