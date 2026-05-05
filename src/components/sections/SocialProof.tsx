import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function SocialProof() {
  return (
    <section data-screen-label="06 Prova Social">
      <div className="container-lp">
        <div className="section-header">
          <ScrollReveal>
            <h2>
              Quem já passou <em>pelo método.</em>
            </h2>
            <p className="body-text" style={{ marginTop: 24, maxWidth: "62ch" }}>
              Mentorias individuais e treinamentos in company conduzidos com
              líderes de empresas, cooperativas e times de alto desempenho. A
              imersão Líder Magnético compila o método em formato presencial
              coletivo pela primeira vez.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
