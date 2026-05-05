import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { WhatsAppButton } from "@/components/primitives/WhatsAppButton";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={styles.cta} data-screen-label="08 CTA Final">
      <div className="container-lp">
        <ScrollReveal>
          <Image
            className={styles.symbolLarge}
            src="/assets/logo-symbol.png"
            alt="Diego Knebel"
            width={80}
            height={80}
          />
          <div className="label-caps" style={{ marginBottom: 24 }}>
            PRÓXIMO PASSO
          </div>
          <h2 className={styles.headline}>
            Esse é o seu <em>próximo movimento?</em>
          </h2>
          <p className={styles.body}>
            Decisões dessa magnitude talvez peçam uma conversa. Clique no
            botão abaixo para conversar com o meu time e entender se a
            imersão se encaixa para o que você está vivendo agora.
          </p>
          <div className={styles.row}>
            <WhatsAppButton
              variant="primary"
              label="Falar com o time no WhatsApp"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
