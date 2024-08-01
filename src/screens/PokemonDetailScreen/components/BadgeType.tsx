import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppText from '../../../common/components/AppText';

const typeColors: any = {
  grass: '#78C850',
  poison: '#A040A0',
  fire: '#F08030',
  flying: '#A890F0',
  water: '#6890F0',
  bug: '#A8B820',
  normal: '#A8A878',
  electric: '#F8D030',
  ground: '#E0C068',
  fairy: '#EE99AC',
  fighting: '#C03028',
  psychic: '#F85888',
  rock: '#B8A038',
  steel: '#B8B8D0',
  ice: '#98D8D8',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
};

const BadgeType = ({ type }: any) => {
  return (
    <View style={[styles.badge, { backgroundColor: typeColors[type] || '#000' }]}>
      <AppText style={styles.text}>{type}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
    borderWidth: 4,
    borderColor: '#d2d2d2'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default BadgeType;
