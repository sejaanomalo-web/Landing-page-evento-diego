"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { WhatsAppButton } from "@/components/primitives/WhatsAppButton";
import styles from "./Lots.module.css";

interface IncludedItem {
  title: string;
  detail: string;
}

const included: IncludedItem[] = [
  {
    title: "Dois dias presenciais inteiros",
    detail:
      "Grupo fechado, até 50 líderes. A primeira edição presencial coletiva do método.",
  },
  {
    title: "11 territórios de transformação",
    detail:
      "Do interno ao coletivo, cada bloco com fundamento e aplicação direta na sua liderança.",
  },
  {
    title: "Método físico em mãos",
    detail:
      "Material do método entregue na imersão, para sustentar a aplicação depois do encontro.",
  },
  {
    title: "Estrutura premium completa",
    detail:
      "Som, iluminação cênica, telão e captação audiovisual conduzindo o estado de presença nos dois dias.",
  },
  {
    title: "Gastronomia inclusa",
    detail:
      "Coffee break premium em todas as pausas, no Deville Express Cascavel.",
  },
  {
    title: "Kit sensorial de boas-vindas",
    detail:
      "Credencial física, brindes sensoriais e check-in com a identidade da imersão.",
  },
  {
    title: "Registro audiovisual e sessão fotográfica",
    detail:
      "Material profissional, com tratamento, para uso pessoal e profissional.",
  },
];

export function Lots() {
  return (
    <section
      id="investimento"
      className={styles.section}
      data-screen-label="08 Investimento"
    >
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2 className={styles.title}>
              <span>Primeiro o que você vive.</span>
              <em>Depois o quanto custa.</em>
            </h2>
            <p className="body-text" style={{ marginTop: 24, maxWidth: "62ch" }}>
              A Líder Magnético não é um curso, é uma imersão de alto padrão. Por
              isso o valor não fica numa página: ele é apresentado pessoalmente
              pelo time, depois que você entende, por inteiro, tudo o que está
              incluído na experiência.
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          <ScrollReveal className={styles.stack}>
            <div className={styles.stackLabel}>Tudo o que está incluído</div>
            <div className={styles.list}>
              {included.map((item) => (
                <div key={item.title} className={styles.item}>
                  <span className={styles.mk}>▲</span>
                  <div className={styles.txt}>
                    {item.title}
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className={styles.card} delay={0.12}>
            <div className={styles.cardLabel}>O valor da imersão</div>
            <div className={styles.cardLead}>
              Apresentado <em>pessoalmente</em> pelo time, no WhatsApp.
            </div>
            <p className={styles.note}>
              A gente faz questão de primeiro garantir que você entenda tudo o
              que vai viver e se a imersão faz sentido pra você nesse momento. Só
              depois apresentamos as condições — sem pressão, no seu tempo.
            </p>
            <div className={styles.micro}>
              <div>
                <div className={styles.microK}>Vagas</div>
                <div className={styles.microV}>Grupo fechado · 50 lugares</div>
              </div>
              <div>
                <div className={styles.microK}>Edição</div>
                <div className={styles.microV}>04 e 05 de julho · 2026</div>
              </div>
            </div>
            <div className={styles.cta}>
              <WhatsAppButton
                variant="primary"
                label="Descobrir as condições"
                withArrow
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
