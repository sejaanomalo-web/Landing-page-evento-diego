"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useIsMobile } from "@/lib/use-is-mobile";
import styles from "./BackgroundAtmosphere.module.css";

/* Desktop: parallax scroll-driven (motion.div + useScroll + useSpring)
   somado às keyframes CSS contínuas dos halos. Cria a sensação de
   profundidade e sincronia com o scroll do usuário. */
function BackgroundAtmosphereDesktop() {
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

/* Mobile: zero JS por scroll. Apenas CSS animations (mais lentas) +
   stage estático + vinheta. Sem useScroll, sem useSpring, sem
   useTransform — evita o cascade de cálculos que travava o scroll. */
function BackgroundAtmosphereMobile() {
  return (
    <>
      <div aria-hidden className={styles.stage} />
      <div aria-hidden className={styles.parallaxLayer}>
        <div className={styles.haloBege} />
      </div>
      <div aria-hidden className={styles.parallaxLayer}>
        <div className={styles.haloOrange} />
      </div>
      <div aria-hidden className={styles.parallaxLayer}>
        <div className={styles.haloDeep} />
      </div>
      <div aria-hidden className={styles.parallaxLayer}>
        <div className={styles.beam} />
      </div>
      <div aria-hidden className={styles.vignette} />
    </>
  );
}

export function BackgroundAtmosphere() {
  const isMobile = useIsMobile();
  return isMobile ? (
    <BackgroundAtmosphereMobile />
  ) : (
    <BackgroundAtmosphereDesktop />
  );
}
