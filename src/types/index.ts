export interface Todo {
    id: number
    title: string
    completed: boolean
}

export interface SearchState {
    search: string
    showComplete: boolean
    updateSearch: (updatedSearch: string) => void
    toggleShowCompleted: (showCompleted: boolean) => void
}

export declare interface TodoItemProps {
    todo: Todo
    onUpdateTodo: (id: number, updatedTitle: string) => void
    onDeleteTodo: (id: number) => void 
    onToggleComplete: (id: number, updatedComplete: boolean) => void
}
