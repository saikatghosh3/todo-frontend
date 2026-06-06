import { useState, useEffect } from 'react'
import axios from 'axios'


const API_URL = import.meta.env.VITE_API_URL || 'https://todo-backend-ke7l.onrender.com/api/todos'
export function useTodos() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API_URL)
      setTodos(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const addTodo = async (e) => {
    e.preventDefault()
    if (!task.trim()) return
    setSubmitting(true)
    try {
      const res = await axios.post(API_URL, { task })
      setTodos([res.data, ...todos])
      setTask('')
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  const toggleTodo = async (id, currentStatus) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, { done: !currentStatus })
      setTodos(todos.map(todo => todo._id === id ? res.data : todo))
    } catch (err) {
      console.error(err)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setTodos(todos.filter(todo => todo._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return {
    todos,
    task,
    setTask,
    loading,
    submitting,
    addTodo,
    toggleTodo,
    deleteTodo
  }
}