import { create } from 'zustand'
import { SearchState } from '../types/index'

export const useSearchStore = create<SearchState>()((set) => ({
  search: '',
  showComplete: false,
  updateSearch: (updatedSearch) => set((state) => ({ search: state.search = updatedSearch })),
  toggleShowCompleted: (updatedShowCompleted) => set((state) => ({ showComplete: state.showComplete = updatedShowCompleted })),
}))