

export default function TodoForm({ task, setTask, onSubmit, submitting, editingId }) {
  return (
    <form onSubmit={onSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={editingId ? "Update your task..." : "Add a new task..."}
        className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
      />
      <button
        type="submit"
        disabled={submitting}
        className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
      >
        {submitting ? '...' : editingId ? 'Update' : 'Add'}
      </button>
    </form>
  )
}