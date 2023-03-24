import { useTodoStore, useSearchStore } from "../../../../stores/index";
import { TodoMap } from "../TodoMap";

export const AllFilter = () => {
  const todoList = useTodoStore((state) => state);
  const searchQuery = useSearchStore((state) => state.search);

  let filteredItems: any[];

  filteredItems = todoList.todos.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TodoMap filteredItems={filteredItems} />
    </>
  );
};
