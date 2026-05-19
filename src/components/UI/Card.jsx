export default function Card({ children, className = '' }) {
  return (
    <div className={`
      bg-zinc-900/40 
      backdrop-blur-md 
      border border-zinc-800/80 
      rounded-2xl 
      p-6 
      transition-all duration-500 ease-out
      shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] 
      hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] 
      hover:border-amber-500/30 
      hover:-translate-y-1
      ${className}
    `}>
      {children}
    </div>
  );
}