/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle, TweakSlider, TweakColor */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "Cinematográfico",
  "accentMode": "Laranja sinal",
  "rhombPattern": true,
  "noise": true,
  "headlineStyle": "Caixa-alta",
  "ctaStyle": "Sólido",
  "vignetteIntensity": 55
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const root = document.documentElement;

  // Accent mode
  const accents = {
    "Laranja sinal":  { primary: "#D3451E", warm: "#E55A2E" },
    "Bege dourado":   { primary: "#C9A86A", warm: "#D9BC83" },
    "Bicromático":    { primary: "#D3451E", warm: "#F1DAB2" },
  };
  const a = accents[t.accentMode] || accents["Laranja sinal"];
  root.style.setProperty('--orange', a.primary);
  root.style.setProperty('--orange-warm', a.warm);

  // Rhomb pattern
  document.querySelectorAll('.bg-rhomb-pattern').forEach(el => {
    el.style.display = t.rhombPattern ? 'block' : 'none';
  });
  // Add or remove pattern overlay on the bg-stage
  let pat = document.querySelector('.bg-pattern-overlay');
  if (t.rhombPattern) {
    if (!pat) {
      pat = document.createElement('div');
      pat.className = 'bg-pattern-overlay';
      pat.style.cssText = `position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.05;
        background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><path d='M40 8 L72 40 L40 72 L8 40 Z' fill='none' stroke='%23F1DAB2' stroke-width='0.6'/></svg>");
        background-size:80px 80px;`;
      document.body.appendChild(pat);
    }
  } else if (pat) { pat.remove(); }

  // Noise
  const noise = document.querySelector('.bg-noise');
  if (noise) noise.style.display = t.noise ? 'block' : 'none';

  // Vignette
  let vig = document.querySelector('.bg-vignette-dyn');
  if (!vig) {
    vig = document.createElement('div');
    vig.className = 'bg-vignette-dyn';
    vig.style.cssText = 'position:fixed;inset:0;z-index:1;pointer-events:none;';
    document.body.appendChild(vig);
  }
  vig.style.background = `radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, rgba(0,0,0,${t.vignetteIntensity / 100}) 100%)`;

  // Headline style
  const headline = document.querySelector('.hero-headline');
  if (headline) {
    if (t.headlineStyle === "Caixa-alta") {
      headline.style.textTransform = 'uppercase';
      headline.style.fontWeight = '900';
    } else if (t.headlineStyle === "Caixa-baixa serif italic") {
      headline.style.textTransform = 'none';
      headline.style.fontWeight = '700';
      headline.style.fontStyle = 'italic';
    } else {
      headline.style.textTransform = 'none';
      headline.style.fontWeight = '700';
      headline.style.fontStyle = 'normal';
    }
  }

  // CTA style
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (t.ctaStyle === "Sólido") {
      btn.style.background = a.primary;
      btn.style.color = 'white';
      btn.style.border = '1px solid transparent';
    } else if (t.ctaStyle === "Outline") {
      btn.style.background = 'transparent';
      btn.style.color = a.primary;
      btn.style.border = `1px solid ${a.primary}`;
    } else {
      btn.style.background = `linear-gradient(135deg, ${a.primary} 0%, ${a.warm} 100%)`;
      btn.style.color = 'white';
      btn.style.border = '1px solid transparent';
    }
  });

  // Hero variant
  const lockup = document.querySelector('.lockup');
  if (lockup) {
    if (t.heroVariant === "Estático (sem animação)") {
      lockup.querySelectorAll('.lockup-symbol, .char, .lockup-subtle').forEach(el => {
        el.style.animation = 'none';
        el.style.opacity = '1';
        el.style.transform = '';
      });
      const sym = lockup.querySelector('.lockup-symbol');
      if (sym) {
        sym.style.left = '0%';
        sym.style.top = '50%';
        sym.style.transform = 'translate(0, -50%) scale(0.55)';
        sym.style.transformOrigin = 'left center';
      }
    }
  }
}

function App() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Hero">
        <TweakRadio
          label="Animação de abertura"
          value={t.heroVariant}
          options={["Cinematográfico", "Estático (sem animação)"]}
          onChange={v => setT('heroVariant', v)}
        />
        <TweakRadio
          label="Estilo do headline"
          value={t.headlineStyle}
          options={["Caixa-alta", "Mista", "Caixa-baixa serif italic"]}
          onChange={v => setT('headlineStyle', v)}
        />
      </TweakSection>

      <TweakSection title="Atmosfera">
        <TweakRadio
          label="Acento de cor"
          value={t.accentMode}
          options={["Laranja sinal", "Bege dourado", "Bicromático"]}
          onChange={v => setT('accentMode', v)}
        />
        <TweakToggle
          label="Padrão de losangos"
          value={t.rhombPattern}
          onChange={v => setT('rhombPattern', v)}
        />
        <TweakToggle
          label="Granulado / noise"
          value={t.noise}
          onChange={v => setT('noise', v)}
        />
        <TweakSlider
          label="Vinhetagem"
          value={t.vignetteIntensity}
          min={0} max={100} step={5}
          onChange={v => setT('vignetteIntensity', v)}
          unit="%"
        />
      </TweakSection>

      <TweakSection title="CTA">
        <TweakRadio
          label="Estilo do botão"
          value={t.ctaStyle}
          options={["Sólido", "Outline", "Gradiente"]}
          onChange={v => setT('ctaStyle', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
