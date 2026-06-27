
"use client";

import React, { ReactNode } from "react";

interface KastButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "default" | "outlined" | "secondary";
  className?: string;
}

/**
 * Kast 3D Button Component
 *
 * A bold, pressable 3D button with three variants:
 *   - default:   Kast red with 3D shadow
 *   - outlined:  Transparent with red border and red shadow
 *   - secondary: Black with dark gray 3D shadow
 *
 * Accepts both strings and JSX elements as children.
 *
 * Usage:
 *   <KastButton>Watch Now</KastButton>
 *   <KastButton variant="outlined">Join Room</KastButton>
 *   <KastButton variant="secondary" size="lg"><PlayIcon /> Start Party</KastButton>
 */
export default function KastButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  size = "md",
  fullWidth = false,
  variant = "default",
  className = "",
}: KastButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    default: {
      bg: "#EF4444",
      shadow: "0 6px 0 #991b1b",
      text: "#FFFFFF",
      activeShadow: "none",
      hoverBg: "#DC2626",
    },
    outlined: {
      bg: "transparent",
      shadow: "0 6px 0 #EF4444",
      text: "#EF4444",
      activeShadow: "none",
      hoverBg: "rgba(239, 68, 68, 0.1)",
    },
    secondary: {
      bg: "#0F172A",
      shadow: "0 6px 0 #000000",
      text: "#FFFFFF",
      activeShadow: "none",
      hoverBg: "#1E293B",
    },
  };

  const style = variantStyles[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        gap-2
        font-bold
        rounded-xl
        border-2
        select-none
        transition-all
        duration-100
        active:translate-y-[6px]
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:active:translate-y-0
        ${variant === "outlined" ? "border-[#EF4444]" : "border-transparent"}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      style={{
        backgroundColor: style.bg,
        color: style.text,
        boxShadow: style.shadow,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.target as HTMLElement).style.backgroundColor = style.hoverBg;
        }
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.backgroundColor = style.bg;
      }}
    >
      {children}
    </button>
  );
}