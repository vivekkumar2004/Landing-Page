import React from 'react';

export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-8 py-3 rounded-md font-medium text-sm uppercase tracking-widest transition-all duration-300";
  const variants = {
    primary: "bg-amber-500 text-zinc-950 hover:bg-amber-400",
    secondary: "bg-zinc-900 text-amber-500 border border-amber-500/30 hover:bg-amber-500 hover:text-zinc-950"
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