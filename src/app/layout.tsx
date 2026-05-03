import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { MetaPixel } from "@/components/integrations/MetaPixel";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-titillium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Líder Magnético · Diego Knebel",
  description:
    "Imersão presencial de 2 dias em comunicação e liderança. Para quem precisa transmitir o que sabe com mais clareza, presença e impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={titillium.variable}>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
