import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../../common/components/AppText'
import { useTheme } from 'react-native-paper'

export default function Abilities({ pokemon }: any) {

  const { colors } = useTheme()

  return (
    <><AppText style={styles.secondary}>Habilidades:</AppText><ScrollView contentContainerStyle={styles.abilities}>
      {pokemon?.abilities?.map((abi: any) => (
        <View key={abi.ability.name} style={[styles.abilitie, { backgroundColor: colors.surface }]}>
          <AppText style={[styles.abilitie_name, { color: colors.primary }]}>{abi.ability.name}</AppText>
        </View>
      ))}
    </ScrollView></>
  )
}

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  abilities: {
    borderWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    height: height * 0.05
  },
  abilitie: {

    width: '45%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  abilitie_name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondary: {
    fontSize: 18,
  },
})