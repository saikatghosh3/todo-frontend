import { Loader2 } from 'lucide-react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, loading, onToggle, onDelete }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-500">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
        <p className="mt-2 text-xs">Fetching tasks from Render...</p>
      </div>
    )
  }

  if (todos.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-800 p-8 text-center text-slate-500">
        <p className="text-sm">No tasks found. Create one above!</p>
      </div>
    )
  }

  return (
    <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}