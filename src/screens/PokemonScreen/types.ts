import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


export type RootStackParamList = {
  PokemonScreen: any;
  PokemonDetail: { url: string };
};

export type PokemonListNavigationProp = StackNavigationProp<RootStackParamList, 'PokemonScreen'>;
type PokemonListRouteProp = RouteProp<RootStackParamList, 'PokemonScreen'>;

export type Props = {
  navigation: PokemonListNavigationProp;
  route: PokemonListRouteProp;
};
