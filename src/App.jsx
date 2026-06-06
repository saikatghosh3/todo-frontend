import { useTodos } from './hooks/useTodos'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default function App() {
  const {
    todos,
    task,
    setTask,
    loading,
    submitting,
    addTodo,
    toggleTodo,
    deleteTodo
  } = useTodos()

  return (
    <div className="flex min-h-screen  items-center justify-center bg-slate-950 p-4 font-sans text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-3xl font-black tracking-tight text-transparent">
            All Tasks
          </h1>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400 border border-slate-700/50">
            {todos.filter(t => !t.done).length} remaining
          </span>
        </div>

        <TodoForm
          task={task}
          setTask={setTask}
          onSubmit={addTodo}
          submitting={submitting}
        />

        <TodoList
          todos={todos}
          loading={loading}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  )
}