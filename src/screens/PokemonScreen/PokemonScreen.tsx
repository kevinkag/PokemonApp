import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Props } from './types';
import usePokemonStore from '../../store/pokemon.store';
import AppTemplate from '../../common/components/templates/AppTemplate';
import AppLoader from '../../common/components/AppLoader';
import SearchComponent from './components/SearchComponent';
import Item from './components/Item';

export default function PokemonScreen({ navigation, route }: Props) {

  const { pokemonList, loading, fetchPokemonList } = usePokemonStore();

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <AppTemplate>
      <SearchComponent navigation={navigation} route={route} />
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        onEndReached={fetchPokemonList}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <AppLoader /> : null}
      />
    </AppTemplate>
  );
}
