import { Loader2 } from 'lucide-react'

export default function Button({ type = 'button', disabled, onClick, children, className = '' }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-slate-950 font-bold hover:from-emerald-400 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 transition-all duration-200 cursor-pointer ${className}`}
    >
      {disabled ? <Loader2 className="h-5 w-5 animate-spin" /> : children}
    </button>
  )
}