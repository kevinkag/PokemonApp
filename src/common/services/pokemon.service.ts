import axios from 'axios';
import { PokemonResponse } from '../interfaces';
import { Pokemon } from '../interfaces/PokemonItem';

export const fetchPokemon = async (url: string): Promise<PokemonResponse> => {
  const response = await axios.get<PokemonResponse>(url);
  return response.data;
};


export const fetchPokemonByUrl = async (url: any): Promise<Pokemon> => {
  try {
    const response = await axios.get<Pokemon>(url);
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }

};