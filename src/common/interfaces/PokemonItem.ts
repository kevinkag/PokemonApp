// interfaces.ts
export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: string;
  weight: string;
  abilities: PokemonAbility[];
  types: PokemonType[];
  moves: PokemonMove[];
  stats: PokemonStat[];
  sprites: {
    front_default: string;
    [key: string]: string;
  };
}
