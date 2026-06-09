import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { WhatsAppButton } from "@/components/primitives/WhatsAppButton";
import styles from "./HeroCta.module.css";

export function HeroCta() {
  return (
    <section className={styles.section} data-screen-label="01b CTA Hero">
      <div className="container-lp">
        <ScrollReveal>
          <div className={styles.row}>
            <WhatsAppButton
              variant="primary"
              label="Quero garantir minha vaga"
              className="btn-lg"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
