import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import styles from "./Program.module.css";

interface Item {
  n: string;
  title: string;
  body: string;
}

const items: Item[] = [
  { n: "01", title: "Consciência de liderança", body: "Entenda seu padrão ou repita seus erros." },
  { n: "02", title: "Autoridade percebida", body: "Respeito não se exige, se constrói." },
  { n: "03", title: "Ativação interna", body: "Pare de motivar. Comece a despertar." },
  { n: "04", title: "Conexão que gera resultados", body: "Conquiste antes de falar." },
  { n: "05", title: "Clareza que move pessoas", body: "Diga o que precisa ser feito, e faça acontecer." },
  { n: "06", title: "Escuta estratégica", body: "Entenda o que não está sendo dito." },
  { n: "07", title: "Conversas que transformam performance", body: "Ajuste rápido, evolução constante." },
  { n: "08", title: "Controle emocional sob pressão", body: "Quem domina a si, lidera qualquer cenário." },
  { n: "09", title: "Conflitos que constroem resultados", body: "Pare de evitar. Comece a usar." },
  { n: "10", title: "Delegar sem perder o controle", body: "Confiança com responsabilidade." },
  { n: "11", title: "Engajamento real", body: "Pessoas comprometidas entregam mais sem cobrança." },
];

function ProgItem({ n, title, body, lastNoBorder }: Item & { lastNoBorder?: boolean }): ReactNode {
  return (
    <StaggerItem
      className={styles.item}
      style={lastNoBorder ? { borderRight: "none" } : undefined}
    >
      <div className={styles.row}>
        <div className={styles.marker}>{n}</div>
        <div>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      </div>
    </StaggerItem>
  );
}

export function Program() {
  return (
    <section id="programa" data-screen-label="04 Programa">
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              Onze territórios, do <em>interno ao coletivo.</em>
            </h2>
            <p className="body-text" style={{ marginTop: 24, maxWidth: "62ch" }}>
              Cada bloco com fundamento (neurociência aplicada, observação
              prática) e aplicação direta. A sequência foi pensada para
              destravar você antes de destravar o seu time.
            </p>
          </ScrollReveal>
        </div>

        <StaggerGrid className={styles.list}>
          {items.map((it, i) => (
            <ProgItem
              key={it.n}
              {...it}
              lastNoBorder={i === items.length - 1}
            />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
