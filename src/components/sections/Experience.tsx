import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import styles from "./Experience.module.css";

const cards = [
  {
    n: "▲ 01",
    title: "Check-in com credencial física",
    body: "Kit sensorial de boas-vindas entregue à chegada. Primeiro contato físico com a marca da imersão.",
    span: "c1",
  },
  {
    n: "▲ 02",
    title: "Ambientação sonora e iluminação cênica",
    body: "Trilha sonora curada e luz cênica em todos os blocos. O ambiente foi pensado para conduzir o estado de presença que o método exige nos dois dias inteiros.",
    span: "c2",
  },
  {
    n: "▲ 03",
    title: "Captação audiovisual completa",
    body: "Registro do que você viver para revisão posterior.",
    span: "c3",
  },
  {
    n: "▲ 04",
    title: "Coffee break premium",
    body: "Em todas as pausas. Gastronomia incluída no plano da imersão.",
    span: "c4",
  },
  {
    n: "▲ 05",
    title: "Material físico do método",
    body: "Entrega no fim do primeiro dia. Para sustentar a aplicação depois do encontro.",
    span: "c5",
  },
  {
    n: "▲ 06",
    title: "Espaço dedicado a registro fotográfico",
    body: "Cenário com identidade da imersão para fotos individuais e em grupo, com tratamento profissional. Material para uso pessoal e profissional.",
    span: "c6",
  },
  {
    n: "▲ 07",
    title: "Encerramento com assinatura emocional",
    body: "Um último momento conduzido. Fechamento do ciclo com peso e silêncio.",
    span: "c7",
  },
];

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

        <StaggerGrid className={styles.grid}>
          {cards.map((card) => (
            <StaggerItem
              key={card.n}
              className={`${styles.card} ${styles[card.span]}`}
            >
              <div className={styles.num}>{card.n}</div>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
