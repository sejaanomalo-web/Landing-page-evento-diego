import { ScrollReveal } from "@/components/motion/ScrollReveal";
import styles from "./Venue.module.css";

const includedItems = [
  "Coffee break premium em todas as pausas",
  "Material físico do método ao fim do primeiro dia",
  "Kit sensorial de boas-vindas na chegada",
  "Brindes sensoriais da imersão",
  "Registro audiovisual completo para revisão posterior",
  "Espaço dedicado a registro fotográfico individual e em grupo",
];

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
          <div className={styles.stickyCol}>
            <ScrollReveal>
              <div className={styles.img}>
                <div className={styles.centerMark}>▲</div>
              </div>
            </ScrollReveal>
          </div>

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

            <h3 className={styles.subheader}>Acessos</h3>
            <div className={styles.details}>
              <div className={styles.cell}>
                <div className={styles.k}>Aeroporto</div>
                <div className={styles.v}>
                  13 km · Aeroporto Municipal de Cascavel
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>Centro</div>
                <div className={styles.v}>5 km · Cascavel, PR</div>
              </div>
              <div className={`${styles.cell} ${styles.full}`}>
                <div className={styles.k}>Estacionamento</div>
                <div className={styles.v}>
                  Próprio do Deville Express, na chegada
                </div>
              </div>
            </div>

            <h3 className={styles.subheader}>Estrutura do espaço</h3>
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
                <div className={styles.k}>Som</div>
                <div className={styles.v}>Calibrado para sala fechada</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>Iluminação</div>
                <div className={styles.v}>Cênica em todos os blocos</div>
              </div>
              <div className={`${styles.cell} ${styles.full}`}>
                <div className={styles.k}>Captação</div>
                <div className={styles.v}>
                  Áudio, vídeo e fotografia profissionais
                </div>
              </div>
            </div>

            <h3 className={styles.subheader}>Incluído no plano</h3>
            <ul className={styles.includedList}>
              {includedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className={styles.subheader}>Datas confirmadas</h3>
            <div className={styles.dateBlock}>04 e 05 de julho · 2026</div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
