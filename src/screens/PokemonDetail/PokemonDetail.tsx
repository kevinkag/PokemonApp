// PokemonDetail.tsx
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { RootStackParamList } from '../../common/interfaces/RootStackParamList';
import { fetchPokemonByUrl } from '../../common/services/pokemon.service';
import { extractIdFromUrl } from '../../common/utils/ExtractIdFromUrl';

type PokemonDetailRouteProp = RouteProp<RootStackParamList, 'PokemonDetail'>;

export default function PokemonDetail() {
  const route = useRoute<PokemonDetailRouteProp>();

  const { url } = route.params;

  const id = extractIdFromUrl(url)

  const { data: pokemon, isLoading, error } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () =>
      fetchPokemonByUrl(url)
  });

  if (isLoading) {
    return <ActivityIndicator style={styles.loader} size="large" />;
  }

  if (error || !pokemon) {
    return <Text style={styles.error}>Pokémon not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{pokemon.name}</Text>
      {/* Aquí puedes renderizar más detalles del Pokémon */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginTop: 20,
  },
  error: {
    color: 'red',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
