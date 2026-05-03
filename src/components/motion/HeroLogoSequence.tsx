"use client";

import Image from "next/image";
import styles from "./HeroLogoSequence.module.css";

const FIRST_NAME = "DIEGO";
const LAST_NAME = "KNEBEL";
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
      <Image
        src="/assets/logo-symbol.png"
        alt="Diego Knebel"
        width={280}
        height={280}
        priority
        className={styles.symbol}
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
