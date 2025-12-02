export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        bg-secondary text-white
        px-6 py-2
        text-sm font-serif font-medium
        shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]
        transition-all duration-200
        hover:opacity-90
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
