import styles from "./BackgroundAtmosphere.module.css";

export function BackgroundAtmosphere() {
  return (
    <>
      <div aria-hidden className={styles.stage} />
      <div aria-hidden className={styles.glow} />
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
