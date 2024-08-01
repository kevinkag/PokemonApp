// components/SearchComponent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useSearchStore from '../../../store/search.store';
import { fetchPokemonByName } from '../../../services/pokemon.service';
import { Button, TextInput, useTheme } from 'react-native-paper';
import SearchInput from '../../../common/components/SearchInput';
import { Props } from '../types';
import usePokemonStore from '../../../store/pokemon.store';
import AppText from '../../../common/components/AppText';


const SearchComponent = ({ navigation }: Props) => {


  const { query, setQuery, isSearching, setIsSearching, error, setError } = useSearchStore();
  const { setResults, clearResults } = usePokemonStore();

  const { colors } = useTheme()

  const handleSearch = async () => {
    setIsSearching(true);
    setError(null);

    try {
      if (!query) {
        return
      }
      const response = await fetchPokemonByName(query);
      setQuery('')
      setResults([response])
    } catch (e) {
      setError('Error al buscar');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
      <View style={styles.content}>
        <SearchInput
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar..."
          style={styles.searchInput}
        />
        <Button onPress={handleSearch} disabled={isSearching} style={styles.button}>
          <AppText style={[styles.buttonText, { color: colors.primary }]}>Buscar</AppText>
        </Button>
      </View>
      {error && <Text>{error}</Text>}

    </>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,

  },
  searchInput: {
    width: '80%',
    backgroundColor: 'transparent',
    fontSize: 14,
  },
  button: {
    width: '20%',
  },
  buttonText: {
    fontSize: 14
  }
})

export default SearchComponent;
