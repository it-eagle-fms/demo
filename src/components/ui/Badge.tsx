import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "accent" | "gold" | "slate" | "success";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "brand",
  className,
  icon,
}) => {
  const variantStyles = {
    brand: "bg-brand-50 text-brand-700 border border-brand-200/80",
    accent: "bg-accent-50 text-accent-800 border border-accent-200/80",
    gold: "bg-amber-50 text-amber-900 border border-amber-300/80",
    slate: "bg-slate-100 text-slate-800 border border-slate-200",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase select-none transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
};
