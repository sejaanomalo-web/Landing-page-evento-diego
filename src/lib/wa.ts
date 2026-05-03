export const WA_DEFAULT_MSG =
  "Olá, vim pela página do Líder Magnético e gostaria de conversar sobre a imersão.";

export function buildWhatsAppHref(numero?: string, message: string = WA_DEFAULT_MSG) {
  const clean = (numero ?? "").replace(/\D/g, "");
  if (!clean) return "#";
  const text = encodeURIComponent(message);
  return `https://wa.me/${clean}?text=${text}`;
}
