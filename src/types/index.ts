export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface SearchState {
  search: string;
  showComplete: boolean;
  todoFilter: number;
  updateSearch: (updatedSearch: string) => void;
  toggleShowCompleted: (showCompleted: boolean) => void;
  updateTodoFilter: (updatedTodoFilter: number) => void;
}

export declare interface TodoItemProps {
  todo: Todo;
  onUpdateTodo: (id: number, updatedTitle: string) => void;
  onDeleteTodo: (id: number) => void;
  onToggleComplete: (id: number, updatedComplete: boolean) => void;
}

export declare interface TodoFormProps {
  handleBackdropClose: () => void;
}

export declare interface EditFormProps {
  title: string;
  setTitle: (title: string) => void;
  handleSave: () => void;
}

export declare interface TodoActionsProps {
  setIsEditing: (editing: boolean) => void;
  handleDelete: () => void;
  setCompleted: (completed: boolean) => void;
  completed: boolean;
}
