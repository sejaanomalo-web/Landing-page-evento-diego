/* Número do time do Diego (formato wa.me: country + DDD + número,
   só dígitos). Pode ser sobrescrito via NEXT_PUBLIC_WHATSAPP_TIME. */
export const WA_DEFAULT_NUMBER = "5545999216522";

export const WA_DEFAULT_MSG =
  "Olá! Estou avaliando minha participação na Imersão Líder Magnético e gostaria de conversar sobre o conteúdo, formato e investimento antes de decidir.";

export function buildWhatsAppHref(
  numero?: string,
  message: string = WA_DEFAULT_MSG,
) {
  const cleaned = (numero ?? "").replace(/\D/g, "");
  const target = cleaned || WA_DEFAULT_NUMBER;
  const text = encodeURIComponent(message);
  return `https://wa.me/${target}?text=${text}`;
}
