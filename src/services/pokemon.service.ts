import axios from 'axios';
import { PokemonResponse, Pokemon as Item } from '../common/interfaces/PokemonResponse';
import { Pokemon } from '../common/interfaces/PokemonItem';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

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

export const fetchPokemonByName = async (name: string): Promise<Item> => {
  try {

    const response = await axios.get<Item>(`${API_URL}/${name}`);
    const fullData = response.data

    console.log(`${API_URL}/${name}`)

    const itemData: Item = {
      name: fullData.name,
      url: `${API_URL}/${name}`
    };

    return itemData
  } catch (error: any) {
    throw new Error(error)
  }
}