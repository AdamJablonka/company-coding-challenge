import { TodoItem } from "./TodoItem";
import { useTodoStore } from "../../../stores";
import { Todo } from "../../../types";

export const TodoMap = ({ filteredItems }: any) => {
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleComplete = useTodoStore((state) => state.toggleComplete);

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {filteredItems.map((todoItem: Todo) => (
        <TodoItem
          key={todoItem.id}
          todo={todoItem}
          onUpdateTodo={updateTodo}
          onDeleteTodo={deleteTodo}
          onToggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
