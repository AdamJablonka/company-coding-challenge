import { create } from "zustand";
import { SearchState } from "../types/index";

export const useSearchStore = create<SearchState>()((set) => ({
  search: "",
  showComplete: false,
  todoFilter: 0,
  updateSearch: (updatedSearch) =>
    set((state) => ({ search: (state.search = updatedSearch) })),
  toggleShowCompleted: (updatedShowCompleted) =>
    set((state) => ({
      showComplete: (state.showComplete = updatedShowCompleted),
    })),
  updateTodoFilter: (updatedTodoFilter) =>
    set((state) => ({
      todoFilter: (state.todoFilter = updatedTodoFilter),
    })),
}));
