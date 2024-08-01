import { create } from 'zustand';

interface SearchStore {
  query: string;
  setQuery: (query: string) => void;
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  setQuery: (query: string) => set({ query }),
  isSearching: false,
  setIsSearching: (isSearching: boolean) => set({ isSearching }),
  error: null,
  setError: (error: string | null) => set({ error }),
}));

export default useSearchStore;
