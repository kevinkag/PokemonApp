import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from '../../../common/components/AppText';

const getStatColor = (statName: any) => {
  switch (statName) {
    case 'hp':
      return '#4caf50'; // Verde
    case 'attack':
      return '#f44336'; // Rojo
    case 'defense':
      return '#2196f3'; // Azul
    case 'special-attack':
      return '#ff5722'; // Rojo oscuro
    case 'special-defense':
      return '#03a9f4'; // Azul claro
    case 'speed':
      return '#FA39C3'; // Rosa
    default:
      return '#f0f0f0'; // Gris claro como predeterminado
  }
};

export default function Stats({ pokemon }: any) {
  // Ordenar las estadísticas para asegurar que se muestren en el orden deseado
  const orderedStats = [
    pokemon?.stats.find((stat: any) => stat.stat.name === 'hp'),
    pokemon?.stats.find((stat: any) => stat.stat.name === 'attack'),
    pokemon?.stats.find((stat: any) => stat.stat.name === 'defense'),
    pokemon?.stats.find((stat: any) => stat.stat.name === 'speed'),
    pokemon?.stats.find((stat: any) => stat.stat.name === 'special-attack'),
    pokemon?.stats.find((stat: any) => stat.stat.name === 'special-defense'),
  ];

  return (
    <View style={styles.statsContainer}>
      {orderedStats.map((stat) => (
        stat && (
          <View key={stat.stat.name} style={[styles.statCard, { backgroundColor: getStatColor(stat.stat.name) }]}>
            <AppText style={styles.statName}>{stat.stat.name}</AppText>
            <AppText style={styles.statValue}>{stat.base_stat}</AppText>
          </View>
        )
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
  },
  statCard: {
    width: '30%', // Ajusta el ancho para que quepan tres elementos por fila
    padding: 0,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  statName: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#fff', // Texto en blanco para mejor visibilidad en fondos de color
  },
  statValue: {
    fontSize: 12,
    color: '#fff', // Texto en blanco para mejor visibilidad en fondos de color
  },
});
