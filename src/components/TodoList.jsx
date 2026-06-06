


import { Trash2, CheckCircle2, Circle, Pencil } from 'lucide-react'

export default function TodoList({ todos, loading, onToggle, onDelete, onEdit }) {
  if (loading) {
    return <div className="text-center text-sm text-slate-500 py-4">Loading tasks...</div>
  }

  if (todos.length === 0) {
    return <div className="text-center text-sm text-slate-500 py-4">No tasks found.</div>
  }

  return (
    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="group flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/40 p-4 transition-all hover:border-slate-800 hover:bg-slate-950/80"
        >
          <div className="flex flex-1 items-center gap-3 cursor-pointer" onClick={() => onToggle(todo._id, todo.done)}>
            <button className="text-slate-600 transition-colors group-hover:text-slate-400">
              {todo.done ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              ) : (
                <Circle className="h-5 w-5" />
              )}
            </button>
            <span className={`text-sm transition-all ${todo.done ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
              {todo.task}
            </span>
          </div>

          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onEdit(todo)
              }}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-teal-400 transition-all"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onDelete(todo._id)
              }}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-rose-400 transition-all"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}