import { useTodoStore, useSearchStore } from "../../../../stores/index";
import { TodoMap } from "../TodoMap";
import { useState, useEffect } from "react";

export const AllFilter = () => {
  const todoList = useTodoStore((state) => state);
  const searchQuery = useSearchStore((state) => state.search);

  const [filteredItems, setFilteredItems] = useState(
    todoList.todos.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  useEffect(() => {
    setFilteredItems(
      (filteredItems) =>
        (filteredItems = todoList.todos.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        ))
    );
  }, [searchQuery, todoList]);

  return (
    <>
      <TodoMap
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
      />
    </>
  );
};
