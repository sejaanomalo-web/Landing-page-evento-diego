"use client";

import { cn } from "@/lib/utils";
import { buildWhatsAppHref } from "@/lib/wa";

interface WhatsAppButtonProps {
  variant?: "primary" | "ghost";
  label?: string;
  withIcon?: boolean;
  withArrow?: boolean;
  className?: string;
  message?: string;
}

const WAIcon = () => (
  <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26L4.5 19.07l1.154-.877z" />
  </svg>
);

export function WhatsAppButton({
  variant = "primary",
  label = "Falar com o time",
  withIcon = true,
  withArrow = true,
  className,
  message,
}: WhatsAppButtonProps) {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_TIME;
  const href = buildWhatsAppHref(numero, message);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const w = window as unknown as { fbq?: (event: string, name: string) => void };
      w.fbq?.("track", "Contact");
      if (!numero) {
        console.warn("NEXT_PUBLIC_WHATSAPP_TIME não configurado.");
      }
    }
  };

  return (
    <a
      href={href}
      target={numero ? "_blank" : undefined}
      rel={numero ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      data-wa
      className={cn("btn", variant === "primary" ? "btn-primary" : "btn-ghost", className)}
    >
      {withIcon ? <WAIcon /> : null}
      {label}
      {withArrow ? <span className="arrow">→</span> : null}
    </a>
  );
}

export function WhatsAppFloating({ message }: { message?: string }) {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_TIME;
  const href = buildWhatsAppHref(numero, message);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const w = window as unknown as { fbq?: (event: string, name: string) => void };
      w.fbq?.("track", "Contact");
    }
  };

  return (
    <a
      href={href}
      target={numero ? "_blank" : undefined}
      rel={numero ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className="wa-float"
      aria-label="Falar com o time no WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26L4.5 19.07l1.154-.877zM17.39 14.347c-.075-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01a1.1 1.1 0 0 0-.793.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
      </svg>
    </a>
  );
}
