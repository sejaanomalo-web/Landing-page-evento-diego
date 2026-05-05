"use client";

import styles from "./HeroLogoSequence.module.css";

const FIRST_NAME = "DIEGO";
const LAST_NAME = "KNEBEL";
/* Timeline cinematográfica (~3.5s totais), conforme spec aprovado.
   D=1.55s, I=1.62s, ..., L=2.30s, em incrementos de 0.07s. */
const CHAR_BASE_DELAY = 1.55;
const CHAR_STAGGER = 0.07;
const GAP_GAIN = 0.05;

function renderChars(word: string, startDelay: number) {
  return word.split("").map((c, i) => (
    <span
      key={`${c}-${i}`}
      className={styles.char}
      style={{ animationDelay: `${startDelay + i * CHAR_STAGGER}s` }}
    >
      {c}
    </span>
  ));
}

export function HeroLogoSequence() {
  return (
    <div className={styles.lockup}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logo-symbol.png"
        alt="Diego Knebel"
        className={styles.symbol}
        style={{ width: "280px", height: "280px" }}
      />
      <div className={styles.text}>
        <div className={styles.name} aria-label="Diego Knebel">
          <span className={styles.word}>{renderChars(FIRST_NAME, CHAR_BASE_DELAY)}</span>
          <span className={styles.gap} />
          <span className={styles.word}>
            {renderChars(LAST_NAME, CHAR_BASE_DELAY + FIRST_NAME.length * CHAR_STAGGER + GAP_GAIN)}
          </span>
        </div>
        <div className={styles.subtle}>MENTOR DE COMUNICAÇÃO &amp; LIDERANÇA</div>
      </div>
    </div>
  );
}
