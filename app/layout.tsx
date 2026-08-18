import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nova-web.vercel.app"),
  title: "NOVA | Pintura, Remodelaciones y Terminaciones",
  description:
    "NOVA transforma espacios con pintura, remodelaciones, tratamiento de humedad, yeso, enduido y Durlock. Solicitá tu presupuesto sin compromiso.",

  openGraph: {
    title: "NOVA | Pintura, Remodelaciones y Terminaciones",
    description:
      "Transformamos espacios. Creamos confianza. Solicitá tu presupuesto sin compromiso.",
    images: ["/nova-og.png"],
    type: "website",
    locale: "es_AR",
  },

  twitter: {
    card: "summary_large_image",
    title: "NOVA | Pintura, Remodelaciones y Terminaciones",
    description:
      "Transformamos espacios. Creamos confianza.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
