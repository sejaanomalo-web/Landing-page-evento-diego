import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  children: ReactNode;
  className?: string;
}

export function EyebrowLabel({ children, className }: EyebrowLabelProps) {
  return <div className={cn("label-caps", className)}>{children}</div>;
}
