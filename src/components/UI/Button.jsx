import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "px-8 py-3 rounded-md font-medium text-sm uppercase tracking-widest transition-all duration-300";
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
    secondary:
      "bg-white text-[#2563EB] border border-[#2563EB]/20 hover:bg-[#EFF6FF] hover:text-[#1D4ED8]",
    ghost: "bg-transparent text-[#2563EB] hover:text-[#1D4ED8]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
