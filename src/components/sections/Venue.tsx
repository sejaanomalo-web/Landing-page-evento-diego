import { ScrollReveal } from "@/components/motion/ScrollReveal";
import styles from "./Venue.module.css";

export function Venue() {
  return (
    <section id="local" data-screen-label="07 Local">
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              Deville Express <em>Cascavel.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          <ScrollReveal className={styles.img}>
            <div className={styles.centerMark}>▲</div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className={styles.info}>
            <p className="body-text">
              Av. Aracy Tanaka Biazetto, 6128. Região do Lago, Cascavel, Paraná.
            </p>
            <p className="body-text" style={{ marginTop: 16 }}>
              Estrutura completa para imersão de alto padrão, com infraestrutura
              audiovisual, sala de evento dedicada e gastronomia incluída no
              plano da imersão. Localização estratégica em Cascavel, a 13 km do
              Aeroporto Municipal e a 5 km do centro.
            </p>

            <div className={styles.details}>
              <div className={styles.cell}>
                <div className={styles.k}>Formato</div>
                <div className={styles.v}>2 dias presenciais inteiros</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>Grupo</div>
                <div className={styles.v}>Fechado · até 50 pessoas</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>Estrutura</div>
                <div className={styles.v}>Som · luz cênica · captação</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>Datas</div>
                <div className={styles.v} style={{ color: "var(--beige)" }}>
                  04 e 05 de julho · 2026
                </div>
              </div>
              <div className={`${styles.cell} ${styles.full}`}>
                <div className={styles.k}>Inclui</div>
                <div className={styles.v}>
                  Coffee break premium · material físico do método · brindes
                  sensoriais · registro audiovisual
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
