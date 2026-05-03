import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import styles from "./SocialProof.module.css";

const testimonials = [
  {
    initials: "RF",
    body: "A leitura que o Diego faz da nossa comunicação no dia a dia é precisa. Saí com clareza do que mudar e da ordem para mudar.",
    role: "Diretor de Operações",
    org: "Cooperativa · Oeste do PR",
  },
  {
    initials: "CM",
    body: "Nada de fórmula. O método cabe na rotina de quem realmente lidera. Conversas que evitava antes hoje já não me custam o mesmo.",
    role: "CEO",
    org: "Indústria · Cascavel",
  },
  {
    initials: "LB",
    body: "O que o Diego entrega tem fundamento e prática. Em três meses de aplicação, o efeito apareceu na entrega do time, não só na minha postura.",
    role: "Head de Comercial",
    org: "Tecnologia · São Paulo",
  },
];

const stats = [
  { v: "+200", body: "Líderes formados em programas privados." },
  { v: "+40", body: "Empresas, cooperativas e times atendidos." },
  { v: "+12", suffix: "a", body: "Anos de método aplicado em campo." },
  { v: "01", body: "Primeira edição presencial coletiva." },
];

export function SocialProof() {
  return (
    <section data-screen-label="06 Prova Social">
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              Quem já passou <em>pelo método.</em>
            </h2>
            <p className="body-text" style={{ marginTop: 24, maxWidth: "62ch" }}>
              Mentorias individuais e treinamentos in company conduzidos com
              líderes de empresas, cooperativas e times de alto desempenho. A
              imersão Líder Magnético compila o método em formato presencial
              coletivo pela primeira vez.
            </p>
          </ScrollReveal>
        </div>

        <StaggerGrid className={styles.row}>
          {testimonials.map((t) => (
            <StaggerItem key={t.initials} className={styles.card}>
              <span className={styles.quoteMark}>&ldquo;</span>
              <div className={styles.testi}>{t.body}</div>
              <div className={styles.who}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.nameSmall}>{t.role}</div>
                  <div className={styles.role}>{t.org}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <StaggerGrid className={styles.stats} staggerDelay={0.1}>
          {stats.map((s, i) => (
            <StaggerItem key={i} className={styles.statsCell}>
              <div className={styles.statsValue}>
                {s.v}
                <span className={styles.ac}>{s.suffix ?? "."}</span>
              </div>
              <div className={styles.statsKey}>{s.body}</div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
