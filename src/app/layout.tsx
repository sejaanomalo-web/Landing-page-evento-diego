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
  title: "Líder Magnético · Comunique-se para atrair, engajar e melhorar resultados · Diego Knebel",
  description:
    "Líder Magnético: comunique-se para atrair, engajar e melhorar resultados. Imersão presencial de 2 dias com Diego Knebel em Cascavel. Para líderes, especialistas e empreendedores que precisam transmitir o que sabem com mais clareza, presença e impacto.",
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
