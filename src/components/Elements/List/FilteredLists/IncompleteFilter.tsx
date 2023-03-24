import { useTodoStore, useSearchStore } from "../../../../stores/index";
import { TodoMap } from "../TodoMap";
import { useState, useEffect } from "react";

export const IncompleteFilter = () => {
  const todoList = useTodoStore((state) => state);
  const searchQuery = useSearchStore((state) => state.search);

  const filteredItems = todoList.todos.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.completed
  );

  return (
    <>
      <TodoMap filteredItems={filteredItems} />
    </>
  );
};
