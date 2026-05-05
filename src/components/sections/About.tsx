import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="sobre" data-screen-label="02 Sobre">
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              Quando a comunicação <em>vira método.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          <ScrollReveal>
            <p className="body-text">
              Tem um momento onde a liderança começa a falhar mesmo com a
              técnica intacta. É quando a mensagem chega de um jeito, a
              postura comunica de outro, e o time entende uma terceira
              maneira. Três versões da mesma fala, nenhuma realmente alinhada.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="body-text">
              <strong style={{ color: "white" }}>
                Líder Magnético é um trabalho de reconstrução:
              </strong>{" "}
              como você se posiciona, como você conduz, como você corrige sem
              ferir. Dois dias inteiros, em grupo fechado, com troca real,
              exercícios práticos e o método que o Diego aplica em mentorias
              individuais e treinamentos in company de alto nível.
            </p>
          </ScrollReveal>
        </div>

        <StaggerGrid className={styles.tenets}>
          <StaggerItem className={styles.tenet}>
            <div className={styles.roman}>i. Presença</div>
            <h4>Postura antes da palavra.</h4>
            <p>
              O corpo fala primeiro. Aprenda a sustentar uma sala antes de
              abrir a boca.
            </p>
          </StaggerItem>
          <StaggerItem className={styles.tenet}>
            <div className={styles.roman}>ii. Clareza</div>
            <h4>Mensagem que chega inteira.</h4>
            <p>
              Reorganize ideia, ritmo e ênfase para que o que você diz seja o
              que o outro escuta.
            </p>
          </StaggerItem>
          <StaggerItem className={styles.tenet}>
            <div className={styles.roman}>iii. Condução</div>
            <h4>Liderar sem decretar.</h4>
            <p>
              Conversa que ajusta, escuta que move, decisão que sustenta. Sem
              fórmula motivacional.
            </p>
          </StaggerItem>
        </StaggerGrid>
      </div>
    </section>
  );
}
