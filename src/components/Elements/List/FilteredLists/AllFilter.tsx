import { useTodoStore, useSearchStore } from "../../../../stores/index";
import { TodoItem } from "../TodoItem";
import { Typography } from "@mui/material";

export const AllFilter = () => {
  const todoList = useTodoStore((state) => state);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleComplete = useTodoStore((state) => state.toggleComplete);
  const searchQuery = useSearchStore((state) => state.search);

  let filteredItems: any[];

  filteredItems = todoList.todos.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h2" align="center" color="textPrimary">
        {filteredItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todo={todoItem}
            onUpdateTodo={updateTodo}
            onDeleteTodo={deleteTodo}
            onToggleComplete={toggleComplete}
          />
        ))}
      </Typography>
    </div>
  );
};
