import { Trash2, CheckCircle, Circle } from 'lucide-react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      className={`group flex items-center justify-between rounded-xl border p-4 transition-all duration-200 ${
        todo.done
          ? 'border-slate-900 bg-slate-950/20 opacity-60'
          : 'border-slate-800/80 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50'
      }`}
    >
      <button
        onClick={() => onToggle(todo._id, todo.done)}
        className="flex flex-1 items-center gap-3 text-left focus:outline-none cursor-pointer"
      >
        {todo.done ? (
          <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
        ) : (
          <Circle className="h-5 w-5 text-slate-600 group-hover:text-emerald-500 shrink-0 transition-colors" />
        )}
        <span className={`text-sm font-medium transition-all duration-200 ${todo.done ? 'line-through text-slate-500' : 'text-slate-200'}`}>
          {todo.task}
        </span>
      </button>
      <button
        onClick={() => onDelete(todo._id)}
        className="rounded-lg p-1.5 text-red-500 hover:bg-slate-800 hover:text-rose-400 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-200 cursor-pointer"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  )
}