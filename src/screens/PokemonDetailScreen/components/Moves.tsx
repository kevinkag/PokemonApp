import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../../common/components/AppText'
import { useTheme } from 'react-native-paper'

export default function Moves({ pokemon }: any) {

  const { colors } = useTheme()

  return (
    <><AppText style={styles.secondary}>Movimientos:</AppText>
      <ScrollView contentContainerStyle={styles.movesContainer}>
        {pokemon?.moves.slice(0, 8).map((move: any) => (
          <View key={move?.move.name} style={[styles.moveCard, { backgroundColor: colors.surface }]}>
            <AppText style={[styles.moveName, { color: colors.primary }]}>{move?.move?.name}</AppText>
          </View>
        ))}
      </ScrollView></>
  )
}

const styles = StyleSheet.create({
  movesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 10,

  },
  moveCard: {
    width: '45%',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    alignItems: 'center',
  },
  moveName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondary: {
    fontSize: 18,
  },
})