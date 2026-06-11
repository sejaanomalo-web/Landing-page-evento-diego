import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade · Líder Magnético · Diego Knebel",
  description:
    "Política de Privacidade da Imersão Líder Magnético, conduzida por Diego Knebel.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="lp-main">
      <article className="policy-page">
        <div className="container-lp">
          <div className="policy-inner">
            <Link href="/" className="policy-back">
              ← Voltar
            </Link>

            <span className="label-caps">
              Líder Magnético <span className="dot" /> Diego Knebel
            </span>
            <h1 className="policy-title">Política de Privacidade</h1>
            <p className="policy-updated">Última atualização: Junho de 2025</p>

            <p className="body-text">
              A sua privacidade é importante para nós. Esta Política de
              Privacidade descreve como coletamos, utilizamos e protegemos os
              dados pessoais fornecidos por meio dos formulários de inscrição,
              páginas de captura e campanhas de divulgação da Imersão Líder
              Magnético, conduzida por Diego Knebel.
            </p>

            <h2 className="policy-heading">1. Coleta de informações</h2>
            <p className="body-text">
              Podemos coletar informações fornecidas voluntariamente por você,
              incluindo:
            </p>
            <ul className="policy-list">
              <li>Nome completo;</li>
              <li>E-mail;</li>
              <li>Telefone ou WhatsApp;</li>
              <li>Cargo;</li>
              <li>Empresa;</li>
              <li>Cidade e estado;</li>
              <li>
                Outras informações fornecidas em formulários de contato ou
                inscrição.
              </li>
            </ul>

            <h2 className="policy-heading">2. Uso das informações</h2>
            <p className="body-text">
              Os dados coletados poderão ser utilizados para:
            </p>
            <ul className="policy-list">
              <li>Entrar em contato sobre a Imersão Líder Magnético;</li>
              <li>Enviar informações relacionadas ao evento;</li>
              <li>
                Fornecer conteúdos educativos sobre liderança, comunicação e
                desenvolvimento profissional;
              </li>
              <li>Responder solicitações e dúvidas;</li>
              <li>Melhorar nossos serviços e experiência do usuário;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="policy-heading">3. Compartilhamento de dados</h2>
            <p className="body-text">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com
              terceiros para fins comerciais.
            </p>
            <p className="body-text">
              As informações poderão ser compartilhadas apenas com fornecedores
              e parceiros necessários para a operação dos serviços, sempre
              respeitando a legislação aplicável de proteção de dados.
            </p>

            <h2 className="policy-heading">4. Armazenamento e segurança</h2>
            <p className="body-text">
              Adotamos medidas técnicas e administrativas adequadas para
              proteger os dados pessoais contra acessos não autorizados,
              perdas, alterações ou divulgações indevidas.
            </p>

            <h2 className="policy-heading">5. Seus direitos</h2>
            <p className="body-text">
              Nos termos da Lei Geral de Proteção de Dados (LGPD), você poderá
              solicitar a qualquer momento:
            </p>
            <ul className="policy-list">
              <li>Confirmação da existência de tratamento dos seus dados;</li>
              <li>Acesso aos seus dados pessoais;</li>
              <li>Correção de informações incompletas ou desatualizadas;</li>
              <li>Exclusão dos dados, quando aplicável;</li>
              <li>Revogação do consentimento anteriormente concedido.</li>
            </ul>

            <h2 className="policy-heading">6. Comunicação e marketing</h2>
            <p className="body-text">
              Ao preencher nossos formulários, você concorda em receber
              comunicações relacionadas à Imersão Líder Magnético, conteúdos
              educacionais, convites para eventos e outras informações
              relevantes.
            </p>
            <p className="body-text">
              Você poderá solicitar o cancelamento dessas comunicações a
              qualquer momento.
            </p>

            <h2 className="policy-heading">7. Contato</h2>
            <p className="body-text">
              Para dúvidas, solicitações ou assuntos relacionados à privacidade
              de dados, entre em contato através dos canais oficiais de Diego
              Knebel.
            </p>
            <p className="body-text">
              E-mail:{" "}
              <a href="mailto:contato@diegoknebel.com" className="policy-link">
                contato@diegoknebel.com
              </a>
            </p>

            <h2 className="policy-heading">8. Alterações desta política</h2>
            <p className="body-text">
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir melhorias em nossos processos ou alterações legais.
              Recomendamos a consulta regular desta página.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
