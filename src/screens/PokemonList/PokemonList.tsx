import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Props } from './types';
import { Pokemon } from './interfaces';
import { Card, Title, ActivityIndicator, useTheme } from 'react-native-paper';
import usePokemonStore from '../../store/pokemon.store';
import Pokeball from '../../assets/icons/pokeball.svg';
import { useThemeContext } from '../../common/theme/ThemeProvider';
import MyAppTemplate from '../../common/components/templates/MyAppTemplate';

export default function PokemonList({ navigation }: Props) {
  const { pokemonList, loading, fetchPokemonList } = usePokemonStore();

  const { colors } = useTheme();
  const { toggleTheme } = useThemeContext();

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const renderItem = ({ item }: { item: Pokemon }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetail', { url: item.url })}
    >
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Title style={[styles.title]}>{item.name}</Title>
          <Pokeball width={24} height={24} />
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <MyAppTemplate>
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        onEndReached={fetchPokemonList}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator animating={true} size="large" /> : null}
      />
    </MyAppTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    marginVertical: 4,
    borderRadius: 14,
  },
  title: {
    textTransform: 'capitalize',
  },
});
