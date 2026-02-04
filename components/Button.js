export default function Button({ children, type = 'button', onClick, disabled = false, variant = 'primary' }) {
  const baseClasses = "w-full py-3 px-6 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-secondary hover:bg-primary text-white",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}
