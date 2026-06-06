import { Plus } from 'lucide-react'
import Button from './Button'

export default function TodoForm({ task, setTask, onSubmit, submitting }) {
  return (
    <form onSubmit={onSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a professional task..."
        className="flex-1 rounded-xl border border-red-900 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
      />
      <Button type="submit" disabled={submitting}>
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  )
}