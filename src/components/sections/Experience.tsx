"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import styles from "./Experience.module.css";

/* Geometria dos cards (precisa bater com Experience.module.css). */
const CARD_WIDTH = 480;
const CARD_GAP = 28;

const cards = [
  {
    n: "▲ 01",
    title: "Check-in com credencial física",
    body: "Kit sensorial de boas-vindas entregue à chegada. Primeiro contato físico com a marca da imersão.",
  },
  {
    n: "▲ 02",
    title: "Ambientação sonora e iluminação cênica",
    body: "Trilha sonora curada e luz cênica em todos os blocos. O ambiente foi pensado para conduzir o estado de presença que o método exige nos dois dias inteiros.",
  },
  {
    n: "▲ 03",
    title: "Captação audiovisual completa",
    body: "Registro do que você viver para revisão posterior.",
  },
  {
    n: "▲ 04",
    title: "Coffee break premium",
    body: "Em todas as pausas. Gastronomia incluída no plano da imersão.",
  },
  {
    n: "▲ 05",
    title: "Material físico do método",
    body: "Entrega no fim do primeiro dia. Para sustentar a aplicação depois do encontro.",
  },
  {
    n: "▲ 06",
    title: "Espaço dedicado a registro fotográfico",
    body: "Cenário com identidade da imersão para fotos individuais e em grupo, com tratamento profissional. Material para uso pessoal e profissional.",
  },
  {
    n: "▲ 07",
    title: "Encerramento com assinatura emocional",
    body: "Um último momento conduzido. Fechamento do ciclo com peso e silêncio.",
  },
];

interface FocusCardProps {
  card: (typeof cards)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function FocusCard({ card, index, total, progress }: FocusCardProps) {
  /* Distribui o "momento de foco" de cada card uniformemente em
     [0.06, 0.94], deixando uma margem de respiro nas pontas. */
  const startBuf = 0.06;
  const endBuf = 0.94;
  const focusCenter =
    startBuf + (index / (total - 1)) * (endBuf - startBuf);
  const focusHalf = ((endBuf - startBuf) / (total - 1)) * 1.1;

  /* Cards nunca somem: opacity mínima 0.55, com blur quando estão
     fora da janela de foco. */
  const opacity = useTransform(
    progress,
    [
      focusCenter - focusHalf * 2,
      focusCenter,
      focusCenter + focusHalf * 2,
    ],
    [0.55, 1, 0.55]
  );
  const scale = useTransform(
    progress,
    [
      focusCenter - focusHalf * 2,
      focusCenter,
      focusCenter + focusHalf * 2,
    ],
    [0.94, 1, 0.94]
  );
  const blur = useTransform(
    progress,
    [
      focusCenter - focusHalf * 2,
      focusCenter,
      focusCenter + focusHalf * 2,
    ],
    ["blur(2.5px)", "blur(0px)", "blur(2.5px)"]
  );

  return (
    <motion.div
      className={styles.cardWrap}
      style={{ opacity, scale, filter: blur }}
    >
      <div className={styles.card}>
        <div className={styles.num}>{card.n}</div>
        <h4>{card.title}</h4>
        <p>{card.body}</p>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const wrapperRef = useRef<HTMLElement>(null);

  /* Translação total = distância entre o centro do card 0 e o centro
     do card 6. Constante (não depende de viewport) porque o ghost
     card à esquerda já garante que card 0 começa centralizado e
     o offset entre cards é fixo. */
  const translateMax = -(cards.length - 1) * (CARD_WIDTH + CARD_GAP);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  /* Spring-smoothed progress: inércia premium pra o lock e a entrada/saída
     ficarem orgânicas, sem corte seco. */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.5,
  });

  /* Hold periods nas pontas: 0-0.06 e 0.94-1 segura os cards parados,
     dando sensação de "pousar" antes de começar a esteira e "soltar" no
     final, em vez de cortar bruscamente. */
  const x = useTransform(
    smoothProgress,
    [0, 0.06, 0.94, 1],
    [0, 0, translateMax, translateMax]
  );

  /* Snap points absolutos alinhados aos focus centers de cada card.
     Como o wrapper é 240vh com sticky 100vh dentro, o range de scroll
     é 140vh; multiplicamos o focus center por 140 pra cair no
     scrollY exato em que cada card está em foco. */
  const snapStartBuf = 0.06;
  const snapEndBuf = 0.94;
  const snapPositions = cards.map((_, i) => {
    const focusCenter =
      snapStartBuf +
      (i / (cards.length - 1)) * (snapEndBuf - snapStartBuf);
    return focusCenter * 140; // em vh, relativo ao topo do wrapper
  });

  return (
    <section
      ref={wrapperRef}
      className={styles.scrollWrapper}
      data-screen-label="03 Experiencia"
    >
      {snapPositions.map((topVh, i) => (
        <div
          key={`snap-${i}`}
          className={styles.snapPoint}
          style={{ top: `${topVh}vh` }}
          aria-hidden
        />
      ))}

      <div className={styles.sticky}>
        <div className="container-lp">
          <div className={styles.header}>
            <h2>
              Cada detalhe pensado para que você <em>saia diferente</em> de
              como entrou.
            </h2>
            <p className="body-text">
              A imersão é técnica, mas também é sensorial. O ambiente, o ritmo,
              a luz, o som e o cuidado com cada pausa fazem parte do método.
            </p>
          </div>
        </div>

        <div className={styles.spotMarker} aria-hidden>
          ▼
        </div>

        <div className={styles.trackContainer}>
          <motion.div className={styles.track} style={{ x }}>
            <div className={styles.ghostCard} aria-hidden />
            {cards.map((card, i) => (
              <FocusCard
                key={card.n}
                card={card}
                index={i}
                total={cards.length}
                progress={smoothProgress}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
