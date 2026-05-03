import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  width: number;
  height: number;
  label?: string;
  className?: string;
  variant?: "diagonal-stripes" | "subtle-grid";
}

export function ImagePlaceholder({
  width,
  height,
  label,
  className,
  variant = "diagonal-stripes",
}: ImagePlaceholderProps) {
  const text = label ?? `IMAGEM · ${width}×${height}`;
  return (
    <div
      role="img"
      aria-label={text}
      className={cn("relative overflow-hidden border", className)}
      style={{
        aspectRatio: `${width} / ${height}`,
        borderColor: "var(--hairline)",
        background:
          variant === "diagonal-stripes"
            ? `linear-gradient(120deg, rgba(58,47,107,0.5), rgba(20,16,46,0.5)), repeating-linear-gradient(45deg, transparent 0 14px, rgba(241,218,178,0.06) 14px 15px)`
            : `linear-gradient(135deg, rgba(58,47,107,0.45), rgba(32,23,71,0.55)), repeating-linear-gradient(45deg, #251A4D 0 16px, #1F1640 16px 17px)`,
      }}
    >
      <div
        className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.2em]"
        style={{ color: "var(--ink-mute)" }}
      >
        {text}
      </div>
    </div>
  );
}
