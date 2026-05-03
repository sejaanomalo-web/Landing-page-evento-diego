import { cn } from "@/lib/utils";

export function SignatureLine({ className }: { className?: string }) {
  return <span aria-hidden className={cn("signature-line", className)} />;
}
