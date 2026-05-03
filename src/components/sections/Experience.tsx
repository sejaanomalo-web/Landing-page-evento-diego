import { ScrollReveal } from "@/components/motion/ScrollReveal";
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
    <div className={styles.card} aria-hidden={false}>
      <div className={styles.num}>{n}</div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

export function Experience() {
  return (
    <section data-screen-label="03 Experiencia">
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              Cada detalhe pensado para que você <em>saia diferente</em> de como
              entrou.
            </h2>
            <p className="body-text" style={{ marginTop: 24, maxWidth: "62ch" }}>
              A imersão é técnica, mas também é sensorial. O ambiente, o ritmo,
              a luz, o som e o cuidado com cada pausa fazem parte do método.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal className={styles.marquee} aria-label="Detalhes da experiência">
        <div className={styles.track}>
          {cards.map((card) => (
            <Card key={`a-${card.n}`} {...card} />
          ))}
          {cards.map((card) => (
            <Card key={`b-${card.n}`} {...card} />
          ))}
        </div>
        <div className={styles.fadeLeft} aria-hidden />
        <div className={styles.fadeRight} aria-hidden />
      </ScrollReveal>
    </section>
  );
}
