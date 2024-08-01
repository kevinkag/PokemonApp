import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { RootStackParamList } from '../../common/interfaces/RootStackParamList';
import { fetchPokemonByUrl } from '../../services/pokemon.service';
import { extractIdFromUrl } from '../../common/utils/ExtractIdFromUrl';
import AppLoader from '../../common/components/AppLoader';
import AppText from '../../common/components/AppText';
import AppTemplate from '../../common/components/templates/AppTemplate';
import { useTheme } from 'react-native-paper';
import CardHeader from './components/CardHeader';
import Abilities from './components/Abilities';
import Moves from './components/Moves';
import Stats from './components/Stats';

type PokemonDetailRouteProp = RouteProp<RootStackParamList, 'PokemonDetail'>;

export default function PokemonDetail() {
  const route = useRoute<PokemonDetailRouteProp>();
  const { url } = route.params;
  const id = extractIdFromUrl(url);
  const { data: pokemon, isLoading, error } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => fetchPokemonByUrl(url),
  });
  const { colors } = useTheme();

  if (isLoading) {
    return <AppLoader />;
  }

  if (error || !pokemon) {
    return <Text style={styles.error}>Pokémon not found</Text>;
  }

  const heightInDecimeters: any = pokemon.height;
  const weightInHectograms: any = pokemon.weight;

  const heightInMeters = heightInDecimeters / 10;
  const weightInKilograms = weightInHectograms / 10;

  return (
    <AppTemplate style={{ backgroundColor: colors.primary }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <CardHeader pokemon={pokemon} />
        <Stats pokemon={pokemon} />

        <AppText style={styles.secondary}>Peso: {weightInKilograms} kg</AppText>
        <AppText style={styles.secondary}>Altura: {heightInMeters} m</AppText>
        <Abilities pokemon={pokemon} />
        <Moves pokemon={pokemon} />
      </View>
    </AppTemplate>
  );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.1,
    paddingTop: height * 0.1,
    alignItems: 'center',
    borderRadius: 14,
    gap: 10,
  },
  error: {
    color: 'red',
  },
  secondary: {
    fontSize: 18,
  },
});
