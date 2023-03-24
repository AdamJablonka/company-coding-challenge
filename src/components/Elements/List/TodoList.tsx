import { useTodoStore, useSearchStore } from "../../../stores/index";
import {
  AllFilter,
  CompletedFilter,
  IncompleteFilter,
} from "./FilteredLists/index";

export const TodoList = () => {
  const todoList = useTodoStore((state) => state);
  const searchQuery = useSearchStore((state) => state.search);
  const todoFilter = useSearchStore((state) => state.todoFilter);

  let filteredItems: any[];

  filteredItems = todoList.todos.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {todoFilter === 0 && <AllFilter />}
      {todoFilter === 1 && <IncompleteFilter />}
      {todoFilter === 2 && <CompletedFilter />}
    </>
  );
};
