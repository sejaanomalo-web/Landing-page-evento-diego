import { HeroLogoSequence } from "@/components/motion/HeroLogoSequence";
import { WhatsAppButton } from "@/components/primitives/WhatsAppButton";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} data-screen-label="01 Hero">
      <div className="container-lp">
        <div className={styles.stage}>
          <HeroLogoSequence />

          <div className={styles.content}>
            <div className={`${styles.eyebrow} label-caps`}>
              IMERSÃO PRESENCIAL <span className="dot" /> 2 DIAS{" "}
              <span className="dot" /> 50 VAGAS
            </div>

            <h1 className={styles.headline}>
              <span className={styles.line}>LÍDER</span>
              <span className={`${styles.line} ${styles.lineAccent}`}>
                MAGNÉTICO.
              </span>
            </h1>

            <p className={styles.sub}>
              O que separa um líder respeitado de um chefe tolerado{" "}
              <strong>tende a estar em como ele se faz entender</strong>, não em
              quanto ele sabe. Dois dias presenciais para reorganizar sua
              presença, sua escuta e sua palavra.
            </p>

            <div className={styles.meta}>
              <div>
                <div className={styles.metaKey}>Quando</div>
                <div className={styles.metaValue}>04 e 05 de julho · 2026</div>
              </div>
              <div>
                <div className={styles.metaKey}>Onde</div>
                <div className={styles.metaValue}>Cascavel · PR</div>
              </div>
              <div>
                <div className={styles.metaKey}>Formato</div>
                <div className={styles.metaValue}>Presencial · 2 dias</div>
              </div>
              <div>
                <div className={styles.metaKey}>Vagas</div>
                <div className={`${styles.metaValue} ${styles.metaAccent}`}>
                  50 lugares
                </div>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <WhatsAppButton variant="primary" label="Falar com o time" />
              <a className="btn btn-ghost" href="#programa">
                Ver programação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
