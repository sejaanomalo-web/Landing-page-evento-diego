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
              A abordagem do Diego costuma combinar{" "}
              <strong style={{ color: "white" }}>
                neurociência aplicada, observação prática e estudo continuado
              </strong>
              , sem cair em fórmula motivacional. O que ele entrega tem
              fundamento, não slogan.
            </p>

            <div className={styles.credentials}>
              <div className={styles.cell}>
                <div className={styles.num}>
                  +12<span className={styles.ac}>a</span>
                </div>
                <div className={styles.desc}>
                  Anos conduzindo treinamentos in company e mentorias
                  individuais.
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.num}>+200</div>
                <div className={styles.desc}>
                  Líderes formados em programas privados de comunicação e
                  liderança.
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.num}>+40</div>
                <div className={styles.desc}>
                  Empresas e cooperativas atendidas em projetos premium.
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.num}>01</div>
                <div className={styles.desc}>
                  Primeira edição do método no formato presencial coletivo.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
