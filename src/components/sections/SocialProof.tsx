import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import styles from "./SocialProof.module.css";

/* Números institucionais. VALIDAR COM DIEGO antes de publicar.
   Caso algum não possa ser confirmado até o lançamento, remover do array. */
const stats = [
  // VALIDAR COM DIEGO antes de publicar
  { v: "+200", body: "Líderes formados em programas privados." },
  // VALIDAR COM DIEGO antes de publicar
  { v: "+40", body: "Empresas, cooperativas e times atendidos." },
  // VALIDAR COM DIEGO antes de publicar
  { v: "+12", suffix: "a", body: "Anos de método aplicado em campo." },
  // VALIDAR COM DIEGO antes de publicar
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
            <p
              className="body-text"
              style={{ marginTop: 18, maxWidth: "62ch", color: "var(--ink-mute)" }}
            >
              Os depoimentos dos participantes desta primeira edição serão
              publicados aqui após o evento.
            </p>
          </ScrollReveal>
        </div>

        {/* VALIDAR COM DIEGO antes de publicar. Confirmar +200 líderes,
            +40 empresas, +12 anos, 01 primeira edição. Se algum não puder
            ser confirmado, remover do array `stats` acima. */}
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
