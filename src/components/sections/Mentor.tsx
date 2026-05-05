import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SignatureLine } from "@/components/primitives/SignatureLine";
import styles from "./Mentor.module.css";

export function Mentor() {
  return (
    <section id="mentor" data-screen-label="05 Mentor">
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              O método tem <em>nome e rosto.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className={styles.grid}>
          <ScrollReveal className={styles.photo}>
            <Image
              className={styles.photoImg}
              src="/assets/foto-diego.jpg"
              alt="Diego Knebel"
              width={800}
              height={1000}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={false}
            />
            <div className={styles.strap}>
              <div className={styles.strapLabel}>▲ DIEGO KNEBEL</div>
              <div className={styles.strapQuote}>
                &ldquo;Presença não precisa de <em>barulho</em>.&rdquo;
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className={styles.content}>
            <h3>
              Diego <span className={styles.last}>Knebel.</span>
            </h3>
            <SignatureLine />
            <p className="body-text">
              Mentor de comunicação e liderança. Trabalha com líderes,
              especialistas e empreendedores que precisam transmitir o que
              sabem com mais clareza, presença e impacto.
            </p>
            <p className="body-text" style={{ marginTop: 18 }}>
              O que o Diego entrega tem base em{" "}
              <strong style={{ color: "white" }}>
                neurociência aplicada, em mais de mil palestras pelo Brasil e
                em anos conduzindo mentorias individuais e treinamentos in
                company
              </strong>
              . Não é fórmula. É método construído onde a teoria precisou
              virar prática.
            </p>

            <div className={styles.credentials}>
              <div className={styles.cell}>
                <div className={styles.num}>+17 anos</div>
                <div className={styles.desc}>
                  De atuação em palco, treinamentos e mentorias com líderes de
                  empresas e cooperativas.
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.num}>+1.000 palestras</div>
                <div className={styles.desc}>
                  Realizadas pelo Brasil, em diferentes setores, formatos e
                  escalas de público.
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.num}>+40 empresas</div>
                <div className={styles.desc}>
                  Cooperativas, indústrias e instituições atendidas em
                  projetos privados.
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.num}>Imersão inaugural</div>
                <div className={styles.desc}>
                  Primeira vez que o método é trabalhado em dois dias completos
                  de imersão presencial.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
