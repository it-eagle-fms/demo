import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-slate-200/80 shadow-soft p-6 md:p-8 transition-all duration-300",
        hoverEffect &&
          "hover:border-brand-300 hover:shadow-card hover:-translate-y-1.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
