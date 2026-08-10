import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] ${className}`}
    >
      {children}
    </div>
  );
}
