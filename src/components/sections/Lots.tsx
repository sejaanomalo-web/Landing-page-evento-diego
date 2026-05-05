"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { WhatsAppButton } from "@/components/primitives/WhatsAppButton";
import styles from "./Lots.module.css";

const formatBRL = (n: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

type LotStatus = "aberto" | "proximo" | "ultimo";

interface LotData {
  number: number;
  vagas: number;
  price: number;
  status: LotStatus;
  fillPct?: number;
}

const lots: LotData[] = [
  { number: 1, vagas: 35, price: 4000, status: "aberto", fillPct: 90 },
  { number: 2, vagas: 10, price: 4800, status: "proximo" },
  { number: 3, vagas: 5, price: 5200, status: "ultimo" },
];

const statusLabels: Record<LotStatus, string> = {
  aberto: "ABERTO",
  proximo: "PRÓXIMO",
  ultimo: "ÚLTIMO",
};

interface LotProps {
  data: LotData;
  index: number;
}

function Lot({ data, index }: LotProps) {
  const isActive = data.status === "aberto";
  return (
    <motion.div
      className={`${styles.lot} ${isActive ? styles.active : styles.locked}`}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{
        duration: 0.7,
        delay: 0.08 + index * 0.12,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      <div className={styles.stub} aria-hidden />

      <div className={styles.lotHeader}>
        <div className={styles.lotNumber}>
          ▲ Lote {String(data.number).padStart(2, "0")}
        </div>
        <div className={styles.lotBadge}>{statusLabels[data.status]}</div>
      </div>

      <div className={styles.lotVagas}>
        <span className={styles.lotVagasNum}>{data.vagas}</span>
        <span className={styles.lotVagasLabel}>
          {data.vagas === 1 ? "vaga" : "vagas"}
        </span>
      </div>

      {isActive && data.fillPct !== undefined && (
        <div className={styles.lotProgress}>
          <div className={styles.lotProgressBar}>
            <motion.div
              className={styles.lotProgressFill}
              initial={{ width: "0%" }}
              whileInView={{ width: `${data.fillPct}%` }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{
                duration: 1.6,
                delay: 0.6,
                ease: [0.32, 0.72, 0, 1],
              }}
            />
          </div>
          <div className={styles.lotProgressLabel}>
            <span>{data.fillPct}% preenchido</span>
            <span>{Math.round(data.vagas * (1 - data.fillPct / 100))} restam</span>
          </div>
        </div>
      )}

      <div className={styles.lotPrice}>
        <div className={styles.lotPriceLabel}>Investimento</div>
        <div className={styles.lotPriceValue}>{formatBRL(data.price)}</div>
        {isActive && (
          <p className={styles.lotPriceNote}>
            Ao fechar este lote, o próximo abre com menos vagas e ticket maior.
          </p>
        )}
      </div>

      {isActive && (
        <div className={styles.lotCta}>
          <WhatsAppButton
            variant="primary"
            label="Garantir minha vaga"
            withArrow
          />
        </div>
      )}
    </motion.div>
  );
}

export function Lots() {
  return (
    <section
      id="lotes"
      className={styles.section}
      data-screen-label="08 Lotes"
    >
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              Três lotes. <em>Um já está em aberto.</em>
            </h2>
            <p className="body-text" style={{ marginTop: 24, maxWidth: "62ch" }}>
              A imersão é dividida em três lotes. À medida que o primeiro se
              fecha, o próximo abre, com menos vagas e investimento maior.
              Quem decide cedo entra com o ticket mais leve.
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.lotsGrid}>
          {lots.map((data, i) => (
            <Lot key={data.number} data={data} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
