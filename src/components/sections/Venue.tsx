import Image from "next/image";
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
    <section
      id="local"
      className={styles.section}
      data-screen-label="07 Local"
    >
      <div className={styles.fadeMask} aria-hidden />
      <div className="container-lp">
        <div className={styles.stickyHeader}>
          <h2 className={styles.title}>
            Hotel Deville <em>Cascavel.</em>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.stickyCol}>
            <ScrollReveal>
              <div className={styles.img}>
                <Image
                  className={styles.imgPhoto}
                  src="/assets/hotel-deville.jpg"
                  alt="Hotel Deville Cascavel"
                  width={1672}
                  height={941}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1} className={styles.info}>
            {/* VALIDAR COM DIEGO/BRUNO antes de publicar.
                Confirmar endereço exato (qual unidade Deville em Cascavel),
                bem como as distâncias até aeroporto e centro. */}
            <p className="body-text">
              Cascavel, Paraná.
            </p>
            <p className="body-text" style={{ marginTop: 16 }}>
              Estrutura completa para imersão de alto padrão, com infraestrutura
              audiovisual, sala de evento dedicada e gastronomia incluída no
              plano da imersão.
            </p>

            {/* VALIDAR COM DIEGO/BRUNO antes de publicar.
                Confirmar endereço exato, distâncias e condições de
                estacionamento da unidade Deville em Cascavel. */}
            <h3 className={styles.subheader}>Acessos</h3>
            <div className={styles.details}>
              <div className={styles.cell}>
                <div className={styles.k}>Cidade</div>
                <div className={styles.v}>Cascavel, PR</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>Local</div>
                <div className={styles.v}>Hotel Deville Cascavel</div>
              </div>
              <div className={`${styles.cell} ${styles.full}`}>
                <div className={styles.k}>Estacionamento</div>
                <div className={styles.v}>Disponível na chegada</div>
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
