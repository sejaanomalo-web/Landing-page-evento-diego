"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { WhatsAppButton } from "@/components/primitives/WhatsAppButton";
import styles from "./Hero.module.css";

const FIRST_NAME = "DIEGO";
const LAST_NAME = "KNEBEL";
const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`;

/* Scroll progress timeline (0 → 1):
   0.00 - 0.15  symbol fade-in + scale 1.6 → 1.0  (centered)
   0.15 - 0.30  hold (symbol natural size, centered, breathing room)
   0.30 - 0.55  symbol slides to top-left + scales to 0.55
   0.50 - 0.80  name letters reveal (stagger)
   0.78 - 0.86  subtitle fade-up
   0.86 - 1.00  hero content (eyebrow, headline, sub, meta, CTA)
*/

interface CharSpanProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: string;
}

function CharSpan({ index, total, progress, children }: CharSpanProps) {
  const baseStart = 0.5;
  const baseEnd = 0.8;
  const charStep = (baseEnd - baseStart) / total;
  const start = baseStart + index * charStep * 0.85;
  const end = start + charStep * 1.6;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [60, 0]);
  return (
    <motion.span className={styles.char} style={{ opacity, y }}>
      {children}
    </motion.span>
  );
}

export function Hero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Symbol — vertical center stays at viewport center via top:50% + y:-50%
  // until it slides up. Scale + opacity + horizontal position driven by scroll.
  const symbolOpacity = useTransform(scrollYProgress, [0, 0.05], [0.0, 1]);
  const symbolScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.30, 0.55],
    [1.6, 1, 1, 0.55]
  );
  const symbolTop = useTransform(
    scrollYProgress,
    [0.30, 0.55],
    ["50%", "14vh"]
  );
  const symbolLeft = useTransform(
    scrollYProgress,
    [0.30, 0.55],
    ["50%", "0%"]
  );
  const symbolX = useTransform(scrollYProgress, [0.30, 0.55], ["-50%", "0%"]);
  const symbolY = useTransform(scrollYProgress, [0.30, 0.55], ["-50%", "0%"]);

  // Name container — appears as a block when symbol settles at the left
  const nameOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    [0, 1]
  );

  // Subtitle MENTOR DE COMUNICAÇÃO
  const subtleOpacity = useTransform(scrollYProgress, [0.78, 0.86], [0, 1]);
  const subtleY = useTransform(scrollYProgress, [0.78, 0.86], [10, 0]);

  // Hero content reveal at the very end
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.86, 0.98],
    [0, 1]
  );
  const contentY = useTransform(scrollYProgress, [0.86, 0.98], [40, 0]);

  // Headline lines
  const line1Y = useTransform(
    scrollYProgress,
    [0.86, 0.93],
    ["110%", "0%"]
  );
  const line2Y = useTransform(
    scrollYProgress,
    [0.89, 0.96],
    ["110%", "0%"]
  );

  return (
    <section
      ref={wrapperRef}
      className={styles.heroWrapper}
      data-screen-label="01 Hero"
    >
      <div className={styles.heroSticky}>
        <div className="container-lp">
          <div className={styles.stage}>
            <motion.div
              className={styles.symbolWrap}
              style={{
                opacity: symbolOpacity,
                scale: symbolScale,
                top: symbolTop,
                left: symbolLeft,
                x: symbolX,
                y: symbolY,
              }}
            >
              <Image
                src="/assets/logo-symbol.png"
                alt="Diego Knebel"
                width={280}
                height={280}
                priority
                className={styles.symbolImg}
              />
            </motion.div>

            <motion.div
              className={styles.text}
              style={{ opacity: nameOpacity }}
              aria-label={FULL_NAME}
            >
              <div className={styles.name}>
                <span className={styles.word}>
                  {FIRST_NAME.split("").map((c, i) => (
                    <CharSpan
                      key={`f-${i}`}
                      index={i}
                      total={FULL_NAME.replace(" ", "").length}
                      progress={scrollYProgress}
                    >
                      {c}
                    </CharSpan>
                  ))}
                </span>
                <span className={styles.gap} />
                <span className={styles.word}>
                  {LAST_NAME.split("").map((c, i) => (
                    <CharSpan
                      key={`l-${i}`}
                      index={i + FIRST_NAME.length}
                      total={FULL_NAME.replace(" ", "").length}
                      progress={scrollYProgress}
                    >
                      {c}
                    </CharSpan>
                  ))}
                </span>
              </div>
              <motion.div
                className={styles.subtle}
                style={{ opacity: subtleOpacity, y: subtleY }}
              >
                MENTOR DE COMUNICAÇÃO &amp; LIDERANÇA
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.content}
              style={{ opacity: contentOpacity, y: contentY }}
            >
              <div className={`${styles.eyebrow} label-caps`}>
                IMERSÃO PRESENCIAL <span className="dot" /> 2 DIAS{" "}
                <span className="dot" /> 50 VAGAS
              </div>

              <h1 className={styles.headline}>
                <span className={styles.line}>
                  <motion.span
                    className={styles.lineInner}
                    style={{ y: line1Y }}
                  >
                    LÍDER
                  </motion.span>
                </span>
                <span className={`${styles.line} ${styles.lineAccent}`}>
                  <motion.span
                    className={styles.lineInner}
                    style={{ y: line2Y }}
                  >
                    MAGNÉTICO.
                  </motion.span>
                </span>
              </h1>

              <p className={styles.sub}>
                O que separa um líder respeitado de um chefe tolerado{" "}
                <strong>tende a estar em como ele se faz entender</strong>, não
                em quanto ele sabe. Dois dias presenciais para reorganizar sua
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
