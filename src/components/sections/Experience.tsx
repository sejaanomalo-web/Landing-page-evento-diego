"use client";

import { useRef, useState } from "react";
import {
  cubicBezier,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import styles from "./Experience.module.css";

/* Ease nas transições entre dwells. Apple-style smooth curve
   (out-quint similar): segue o scroll do usuário com leve
   suavização, sem dar a sensação de "lag". */
const dwellEase = cubicBezier(0.32, 0.72, 0, 1);

/* Geometria dos cards (precisa bater com Experience.module.css). */
const CARD_WIDTH = 480;
const CARD_GAP = 28;

/* Timeline de scroll dentro da seção:
   cada card tem um "dwell" (pausa centralizado) + uma "transition"
   (deslocamento até o próximo). Ratio dwell:trans = 65:35 para os
   cards passarem mais tempo parados no centro do que em movimento.
   A altura do wrapper (em CSS) controla quantos vh cada um ocupa. */
const DWELL_RATIO = 0.65;
const TRANS_RATIO = 0.35;
const N_CARDS = 7;
const TOTAL_WEIGHT =
  N_CARDS * DWELL_RATIO + (N_CARDS - 1) * TRANS_RATIO;
const DWELL_SPAN = DWELL_RATIO / TOTAL_WEIGHT;
const TRANS_SPAN = TRANS_RATIO / TOTAL_WEIGHT;
/* Range de scroll dentro do wrapper sticky: wrapper 360vh - 100vh
   sticky = 260vh de scroll vertical mapeado em [0, 1]. */
const SCROLL_RANGE_VH = 260;

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
    body: "Encerramento sem pressa. O último bloco existe para que o que aconteceu nesses dois dias tenha tempo de virar decisão.",
  },
];

interface FocusCardProps {
  card: (typeof cards)[number];
  index: number;
  progress: MotionValue<number>;
}

function FocusCard({ card, index, progress }: FocusCardProps) {
  /* Cada card tem um dwell (pausa centralizado) + transition antes
     do próximo. Card i:
     - dwell:    [i*(D+T),         i*(D+T) + D]
     - transition após o dwell: [i*(D+T) + D, (i+1)*(D+T)]
     Onde D = DWELL_SPAN, T = TRANS_SPAN. */
  const dwellStart = index * (DWELL_SPAN + TRANS_SPAN);
  const dwellEnd = dwellStart + DWELL_SPAN;
  /* Janela em que opacity/scale/blur fazem fade out (transition). */
  const fadeMargin = TRANS_SPAN * 0.6;

  /* Auto-hover ativo enquanto o card está no dwell (e mais um pouco). */
  const [focused, setFocused] = useState(false);
  useMotionValueEvent(progress, "change", (latest) => {
    const inDwell = latest >= dwellStart && latest <= dwellEnd;
    setFocused(inDwell);
  });

  /* Cards nunca somem (opacity mínima 0.55), com blur quando estão
     fora do dwell. Durante todo o dwell ficam em foco máximo. */
  const opacity = useTransform(
    progress,
    [
      dwellStart - fadeMargin,
      dwellStart,
      dwellEnd,
      dwellEnd + fadeMargin,
    ],
    [0.55, 1, 1, 0.55]
  );
  const scale = useTransform(
    progress,
    [
      dwellStart - fadeMargin,
      dwellStart,
      dwellEnd,
      dwellEnd + fadeMargin,
    ],
    [0.94, 1, 1, 0.94]
  );
  const blur = useTransform(
    progress,
    [
      dwellStart - fadeMargin,
      dwellStart,
      dwellEnd,
      dwellEnd + fadeMargin,
    ],
    ["blur(2.5px)", "blur(0px)", "blur(0px)", "blur(2.5px)"]
  );

  return (
    <motion.div
      className={`${styles.cardWrap} ${focused ? styles.focused : ""}`}
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

  /* Progress separado mapeando posição da seção dentro do viewport
     (não só o range pinado). Vai de 0 (topo do wrapper toca o rodapé
     da viewport, seção começa a aparecer) a 1 (fim do wrapper passa
     pelo topo da viewport). Usado pra suavizar entry/exit do lock. */
  const { scrollYProgress: viewProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  /* Spring de tracking apertado: stiffness alta + mass baixa fazem
     os cards seguirem o scroll do usuário quase em tempo real
     (~30ms de tempo característico). Damping bem acima do crítico
     elimina oscilação. Smooth + sync, sem lag perceptível. */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 35,
    mass: 0.5,
  });

  /* Mapeamento progress -> x com dwells: cada card tem 2 keyframes
     (start e end do dwell) onde x permanece constante, separados
     por uma transição linear até o próximo card. Isso faz o card
     "ficar parado no centro" durante todo o dwell. */
  const progressKeyframes: number[] = [];
  const xKeyframes: number[] = [];
  for (let i = 0; i < cards.length; i++) {
    const cardX = -i * (CARD_WIDTH + CARD_GAP);
    const dwellStart = i * (DWELL_SPAN + TRANS_SPAN);
    const dwellEnd = dwellStart + DWELL_SPAN;
    progressKeyframes.push(dwellStart, dwellEnd);
    xKeyframes.push(cardX, cardX);
  }
  const x = useTransform(smoothProgress, progressKeyframes, xKeyframes, {
    ease: dwellEase,
  });

  /* Snap points alinhados ao centro do dwell de cada card. */
  const snapPositions = cards.map((_, i) => {
    const dwellStart = i * (DWELL_SPAN + TRANS_SPAN);
    const focusCenter = dwellStart + DWELL_SPAN / 2;
    return focusCenter * SCROLL_RANGE_VH;
  });

  /* Entry/exit smoothing: scale sutil dá a sensação de "pousar" no
     lock e "soltar" quando sai, agora também synced com a posição
     do viewport via spring rápida. */
  const stageScale = useSpring(
    useTransform(viewProgress, [0, 0.18, 0.82, 1], [0.96, 1, 1, 0.96]),
    { stiffness: 200, damping: 30, mass: 0.5 }
  );

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

        <motion.div
          className={styles.trackContainer}
          style={{ scale: stageScale }}
        >
          <motion.div className={styles.track} style={{ x }}>
            <div className={styles.ghostCard} aria-hidden>
              <div className={styles.ghostInner}>
                <div className={styles.num}>▲ 00</div>
                <h4>Pré-experiência da imersão</h4>
                <p>
                  Conexão começa antes da chegada. O cuidado da imersão
                  começa pelo convite e por como você se prepara.
                </p>
              </div>
            </div>
            {cards.map((card, i) => (
              <FocusCard
                key={card.n}
                card={card}
                index={i}
                progress={smoothProgress}
              />
            ))}
            <div
              className={`${styles.ghostCard} ${styles.ghostRight}`}
              aria-hidden
            >
              <div className={styles.ghostInner}>
                <div className={styles.num}>▲ 08</div>
                <h4>Continuidade depois do encontro</h4>
                <p>
                  O método se sustenta na rotina. O que começa nos dois dias
                  segue rendendo nas semanas seguintes.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
