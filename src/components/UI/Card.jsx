export default function Card({ children, className = '' }) {
  return (
    <div className={`
      rounded-2xl 
      p-3 
      transition-all duration-500 ease-out
      ${className}
    `}>
      {children}
    </div>
  );
}