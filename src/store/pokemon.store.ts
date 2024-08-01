import { create } from 'zustand';
import { Pokemon } from '../common/interfaces/PokemonResponse';
import { fetchPokemon, fetchPokemonByUrl } from '../services/pokemon.service';

interface PokemonStore {
  pokemonList: Pokemon[];
  pokemon: any;
  nextUrl: string;
  loading: boolean;
  setResults: (results: any[]) => void;
  clearResults: () => void;
  fetchPokemonList: () => Promise<void>;
  fetchPokemonByUrl: (url: string) => Promise<void>; // Actualizado aquí
}

const usePokemonStore = create<PokemonStore>((set, get) => ({
  pokemonList: [],
  pokemon: {},
  nextUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20',
  loading: false,
  fetchPokemonList: async () => {
    const { nextUrl, pokemonList, loading } = get();
    if (loading || !nextUrl) return; // para evtar llamadas si se estacargando o no hay más URL

    set({ loading: true });
    try {
      const data = await fetchPokemon(nextUrl);
      set({
        pokemonList: [...pokemonList, ...data.results],
        nextUrl: data.next,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      console.error(error);
    }
  },
  fetchPokemonByUrl: async (url: string) => {
    const { loading, pokemon } = get();
    if (loading) return; // para evitar llamadas si se estacargando

    set({ loading: true });
    try {
      const data = await fetchPokemonByUrl(url);
      set({
        pokemon: data,
        loading: false,
      });
      return
    } catch (error) {
      set({ loading: false });
      console.error(error);
    }
  },
  setResults: (pokemonList: any[]) => {
    set({ pokemonList })
  },
  clearResults: () => set({ pokemonList: [] }),
}));

export default usePokemonStore;
