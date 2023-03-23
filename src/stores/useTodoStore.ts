import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Todo } from '../types/index'

const todoStore = (set: any) => ({
  todos: [] as Todo[],
  createTodo: (todo: Todo) => {
    set((state: any) => ({
      todos: [todo, ...state.todos]
    }))
  },
  updateTodo: (id: number, updatedTitle: string) => {
    set((state: any) => ({
      todos: state.todos.map((todo: Todo) =>
        todo.id === id ? {...todo, title: updatedTitle } : todo
      ),
    }))
  },
  deleteTodo: (id: number) => {
    set((state: any) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id)
    }))
  },
  toggleComplete: (id: number, updatedComplete: boolean) => {
    set((state: any) => ({
      todos: state.todos.map((todo: Todo) =>
        todo.id === id ? {...todo, completed: updatedComplete } : todo
      ),
    }))
  },
  clearTodos: () => {
    set((state: any) => ({
      todos: []
    }))
  },
})

export const useTodoStore = create(
  devtools(
    persist(todoStore, {
      name: "todos",
    })
  )
)

