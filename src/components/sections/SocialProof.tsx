import { ScrollReveal } from "@/components/motion/ScrollReveal";
import styles from "./SocialProof.module.css";

const LOGO_COUNT = 24;
/* 15 e 19 removidos a pedido. O CSS distribui o espaçamento via gap
   uniforme no track, então o ritmo se ajusta automaticamente. */
const REMOVED = new Set([15, 19]);
const logoNumbers = Array.from({ length: LOGO_COUNT }, (_, i) => i + 1).filter(
  (n) => !REMOVED.has(n),
);

export function SocialProof() {
  return (
    <section className={styles.section} data-screen-label="06 Prova Social">
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              Onde o método foi <em>construído.</em>
            </h2>
            <p className="body-text" style={{ marginTop: 24, maxWidth: "62ch" }}>
              Projetos privados de desenvolvimento de liderança conduzidos
              com líderes de empresas, cooperativas e times de alto desempenho.
              A imersão Líder Magnético compila o método em formato presencial
              coletivo pela primeira vez.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className={styles.logoStrip} aria-label="Empresas atendidas">
        <div className={styles.logoTrack}>
          {logoNumbers.map((n) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`a-${n}`}
              src={`/assets/logos/${n}.jpg`}
              alt=""
              className={styles.logoImg}
              loading="lazy"
            />
          ))}
          {logoNumbers.map((n) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`b-${n}`}
              src={`/assets/logos/${n}.jpg`}
              alt=""
              className={styles.logoImg}
              loading="lazy"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
}
