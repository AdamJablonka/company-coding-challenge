import { TodoItem } from "./TodoItem";
import { Typography } from "@mui/material";
import { useTodoStore, useSearchStore } from "../../../stores";
import { Todo } from "../../../types";

export const TodoMap = ({ filteredItems }: any) => {
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleComplete = useTodoStore((state) => state.toggleComplete);

  return (
    <div>
      <Typography variant="h2" align="center" color="textPrimary"></Typography>
      <div
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
      </div>
    </div>
  );
};
