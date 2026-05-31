import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import styles from "./Venue.module.css";

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
            Hotel Maestro <em>Premium.</em>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.stickyCol}>
            <ScrollReveal>
              <div className={`${styles.img} ${styles.imgMain}`}>
                <Image
                  className={styles.imgPhoto}
                  src="/assets/maestro-fachada.jpg"
                  alt="Hotel Maestro Premium, fachada"
                  width={1024}
                  height={768}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className={styles.imgGrid}>
              <div className={`${styles.img} ${styles.imgPair}`}>
                <Image
                  className={styles.imgPhoto}
                  src="/assets/maestro-lobby.jpg"
                  alt="Hotel Maestro Premium, lobby"
                  width={1024}
                  height={681}
                  sizes="(max-width: 900px) 100vw, 25vw"
                />
              </div>
              <div className={`${styles.img} ${styles.imgPair}`}>
                <Image
                  className={styles.imgPhoto}
                  src="/assets/maestro-sala.jpg"
                  alt="Hotel Maestro Premium, sala de evento"
                  width={1024}
                  height={681}
                  sizes="(max-width: 900px) 100vw, 25vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12} className={styles.imgBottom}>
              <div className={`${styles.img} ${styles.imgMain}`}>
                <Image
                  className={styles.imgPhoto}
                  src="/assets/maestro-entrada.jpg"
                  alt="Hotel Maestro Premium, entrada principal"
                  width={1024}
                  height={768}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1} className={styles.info}>
            {/* VALIDAR COM DIEGO/BRUNO antes de publicar.
                Confirmar endereço exato (qual unidade Maestro Premium em Cascavel),
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
                estacionamento da unidade Maestro Premium em Cascavel. */}
            <h3 className={styles.subheader}>Acessos</h3>
            <div className={styles.details}>
              <div className={styles.cell}>
                <div className={styles.k}>Cidade</div>
                <div className={styles.v}>Cascavel, PR</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>Local</div>
                <div className={styles.v}>Hotel Maestro Premium</div>
              </div>
              <div className={`${styles.cell} ${styles.full}`}>
                <div className={styles.k}>Estacionamento</div>
                <div className={styles.v}>Disponível na chegada</div>
              </div>
            </div>

            <h3 className={styles.subheader}>Estrutura do espaço</h3>
            <div className={`${styles.details} ${styles.detailsAccent}`}>
              <div className={styles.cell}>
                <div className={styles.k}>
                  <span className={styles.bullet} aria-hidden>▲</span>
                  Formato
                </div>
                <div className={styles.v}>2 dias presenciais inteiros</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>
                  <span className={styles.bullet} aria-hidden>▲</span>
                  Grupo
                </div>
                <div className={styles.v}>Fechado · até 50 pessoas</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>
                  <span className={styles.bullet} aria-hidden>▲</span>
                  Som
                </div>
                <div className={styles.v}>Calibrado para sala fechada</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.k}>
                  <span className={styles.bullet} aria-hidden>▲</span>
                  Iluminação
                </div>
                <div className={styles.v}>Cênica em todos os blocos</div>
              </div>
              <div className={`${styles.cell} ${styles.full}`}>
                <div className={styles.k}>
                  <span className={styles.bullet} aria-hidden>▲</span>
                  Captação
                </div>
                <div className={styles.v}>
                  Áudio, vídeo e fotografia profissionais
                </div>
              </div>
            </div>

            <h3 className={styles.subheader}>Datas confirmadas</h3>
            <div className={styles.dateBlock}>04 e 05 de julho · 2026</div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
