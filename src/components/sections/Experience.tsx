"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Experience.module.css";

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

function Card({ n, title, body }: (typeof cards)[number]) {
  return (
    <div className={styles.card}>
      <div className={styles.num}>{n}</div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

export function Experience() {
  const wrapperRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateMax, setTranslateMax] = useState(0);

  useEffect(() => {
    const compute = () => {
      const trackEl = trackRef.current;
      if (!trackEl) return;
      const trackWidth = trackEl.scrollWidth;
      const viewport = window.innerWidth;
      // Translate enough that the right edge of the last card reaches the
      // right edge of the viewport, with a small breathing margin.
      const max = Math.max(0, trackWidth - viewport + 48);
      setTranslateMax(-max);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, translateMax]);

  return (
    <section
      ref={wrapperRef}
      className={styles.scrollWrapper}
      data-screen-label="03 Experiencia"
    >
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

        <div className={styles.trackContainer}>
          <motion.div
            ref={trackRef}
            className={styles.track}
            style={{ x }}
          >
            {cards.map((card) => (
              <Card key={card.n} {...card} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
