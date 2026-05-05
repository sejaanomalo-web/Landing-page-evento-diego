"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./BackgroundAtmosphere.module.css";

export function BackgroundAtmosphere() {
  /* Parallax sincronizado com scroll do usuário: cada camada anda
     em velocidade diferente, criando profundidade visual. Spring
     suave evita jitter durante scroll rápido. As camadas internas
     (.haloBege/Orange/Deep/beam) mantêm suas próprias animações
     CSS contínuas (drift) — a translateY do parallax aqui é
     adicional, sobre wrappers fixed que não competem com o
     transform das keyframes. */
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollY, {
    stiffness: 80,
    damping: 32,
    mass: 1,
  });

  const yBege = useTransform(smooth, (v) => v * -0.04);
  const yOrange = useTransform(smooth, (v) => v * -0.06);
  const yDeep = useTransform(smooth, (v) => v * -0.025);
  const yBeam = useTransform(smooth, (v) => v * -0.085);

  return (
    <>
      <div aria-hidden className={styles.stage} />

      <motion.div
        aria-hidden
        className={styles.parallaxLayer}
        style={{ y: yBege }}
      >
        <div className={styles.haloBege} />
      </motion.div>
      <motion.div
        aria-hidden
        className={styles.parallaxLayer}
        style={{ y: yOrange }}
      >
        <div className={styles.haloOrange} />
      </motion.div>
      <motion.div
        aria-hidden
        className={styles.parallaxLayer}
        style={{ y: yDeep }}
      >
        <div className={styles.haloDeep} />
      </motion.div>
      <motion.div
        aria-hidden
        className={styles.parallaxLayer}
        style={{ y: yBeam }}
      >
        <div className={styles.beam} />
      </motion.div>

      <div aria-hidden className={styles.vignette} />
      <svg
        aria-hidden
        className={styles.noise}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="atm-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix values="0 0 0 0 0.95  0 0 0 0 0.85  0 0 0 0 0.7  0 0 0 0.45 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#atm-noise)" />
      </svg>
    </>
  );
}
