import Image from "next/image";

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
          <div>Líder Magnético · Imersão Presencial · Cascavel, PR</div>
        </div>
      </div>
    </footer>
  );
}
