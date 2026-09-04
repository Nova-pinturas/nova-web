import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nova-web-mu.vercel.app"),

  verification: {
  google: "njeJc62EriUri8FKc4WREZGq4NFHRx5MqhLpbKK47D0",
},

  title: "NOVA Pinturas & Remodelaciones | Pintores en CABA y GBA",

  description:
    "NOVA Pinturas & Remodelaciones: pintura, enduido, yeso, Durlock y tratamiento de humedad en CABA y GBA. Solicitá tu presupuesto por WhatsApp.",

  openGraph: {
    title: "NOVA Pinturas & Remodelaciones | Pintores en CABA y GBA",
    description:
  "NOVA Pinturas & Remodelaciones: pintura, enduido, yeso, Durlock y tratamiento de humedad en CABA y GBA. Solicitá tu presupuesto.",
    images: ["/nova-og.png"],
    type: "website",
    locale: "es_AR",
  },

  twitter: {
    card: "summary_large_image",
    title: "NOVA Pinturas & Remodelaciones | CABA y GBA",
    description:
      "Transformamos espacios con calidad y confianza. Solicitá tu presupuesto.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">
  {children}
  <WhatsAppButton />
</body>

    </html>
  );
}
