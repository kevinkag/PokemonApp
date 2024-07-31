import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


export type RootStackParamList = {
  PokemonList: undefined;
  PokemonDetail: { url: string };
};

export type PokemonListNavigationProp = StackNavigationProp<RootStackParamList, 'PokemonList'>;
type PokemonListRouteProp = RouteProp<RootStackParamList, 'PokemonList'>;

export type Props = {
  navigation: PokemonListNavigationProp;
  route: PokemonListRouteProp;
};
