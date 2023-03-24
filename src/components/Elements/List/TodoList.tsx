import { useSearchStore } from "../../../stores/index";
import {
  AllFilter,
  CompletedFilter,
  IncompleteFilter,
} from "./FilteredLists/index";

export const TodoList = () => {
  const todoFilter = useSearchStore((state) => state.todoFilter);

  return (
    <>
      {todoFilter === 0 && <AllFilter />}
      {todoFilter === 1 && <IncompleteFilter />}
      {todoFilter === 2 && <CompletedFilter />}
    </>
  );
};
