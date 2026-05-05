"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useIsMobile } from "@/lib/use-is-mobile";
import styles from "./Experience.module.css";

/* Geometria dos cards (precisa bater com Experience.module.css). */
const CARD_WIDTH = 480;
const CARD_GAP = 28;

/* Range de scroll dentro do wrapper sticky: wrapper 360vh - 100vh
   sticky = 260vh de scroll vertical mapeado em [0, 1]. Usado pra
   posicionar os snap points em vh. */
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

interface FocusCardPropsWithTotal extends FocusCardProps {
  total: number;
}

function FocusCard({
  card,
  index,
  total,
  progress,
}: FocusCardPropsWithTotal) {
  /* Mapeamento linear: card i fica centralizado quando progress =
     i / (total - 1). Sem dwells: o movimento horizontal segue o
     scroll do usuário 1:1, sem zonas paradas. */
  const focusCenter = index / (total - 1);
  const halfStep = 1 / (total - 1) / 2; // metade do espaçamento entre cards

  /* Janela de fade: cada card volta a opacity/scale/blur cheios em
     focusCenter, e suaviza até halfStep antes/depois. */
  const opacity = useTransform(
    progress,
    [
      focusCenter - halfStep,
      focusCenter,
      focusCenter + halfStep,
    ],
    [0.55, 1, 0.55]
  );
  const scale = useTransform(
    progress,
    [
      focusCenter - halfStep,
      focusCenter,
      focusCenter + halfStep,
    ],
    [0.94, 1, 0.94]
  );
  const blur = useTransform(
    progress,
    [
      focusCenter - halfStep,
      focusCenter,
      focusCenter + halfStep,
    ],
    ["blur(2.5px)", "blur(0px)", "blur(2.5px)"]
  );

  /* Auto-hover quando o card está dentro de 25% do halfStep do
     centro (zona quente apertada pra evitar 2 cards "focused"
     simultaneamente). */
  const [focused, setFocused] = useState(false);
  useMotionValueEvent(progress, "change", (latest) => {
    const inHotZone = Math.abs(latest - focusCenter) < halfStep * 0.25;
    setFocused(inHotZone);
  });

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

/* Mobile: render simples (stack vertical) sem framer-motion, sem
   useScroll, sem useSpring. Evita travamento causado pelo cascade
   de re-cálculos por scroll event num dispositivo de menor poder
   de processamento. */
function ExperienceMobile() {
  return (
    <section
      className={styles.mobileSection}
      data-screen-label="03 Experiencia"
    >
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
        <div className={styles.mobileStack}>
          {cards.map((card) => (
            <div key={card.n} className={styles.card}>
              <div className={styles.num}>{card.n}</div>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const isMobile = useIsMobile();
  if (isMobile) return <ExperienceMobile />;
  return <ExperienceDesktop />;
}

function ExperienceDesktop() {
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

  /* Spring de tracking ultra-apertado: stiffness 400, mass 0.3
     dá tempo característico ~15ms — efetivamente sincronizado com
     o scroll do usuário, mas com smoothing suficiente pra absorver
     jitter do wheel/touch e produzir movimento fluido. */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 42,
    mass: 0.3,
  });

  /* Mapeamento linear puro: progress 0 -> x 0 (card 0 centralizado),
     progress 1 -> x translateMax (card 6 centralizado). Sem dwells,
     o movimento horizontal acompanha o scroll do usuário em todo
     o range, sem zonas paradas. */
  const x = useTransform(smoothProgress, [0, 1], [0, translateMax]);

  /* Snap points distribuídos linearmente: card i centralizado em
     progress = i / (N - 1). */
  const snapPositions = cards.map(
    (_, i) => (i / (cards.length - 1)) * SCROLL_RANGE_VH
  );

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
                total={cards.length}
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
