import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="lp-footer">
      <div className="container-lp">
        <div className="footer-grid">
          <div className="footer-mark">
            <Image
              src="/assets/logo-symbol.png"
              alt=""
              width={22}
              height={22}
            />
            <span>Diego Knebel · 2026</span>
          </div>
          <div>
            Líder Magnético · Imersão Presencial · Cascavel, PR ·{" "}
            <Link href="/politica-de-privacidade" className="footer-policy-link">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
