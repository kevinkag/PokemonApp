import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppImage from '../../../common/components/AppImage'
import BadgeType from './BadgeType'
import AppText from '../../../common/components/AppText'

export default function CardHeader({ pokemon }: any) {
  return (
    <>
      <AppImage uri={pokemon?.sprites.front_default} style={styles.imagePokemon} />
      <View style={styles.header}>
        <AppText style={styles.name}>{pokemon?.name}</AppText>
        <BadgeType type={pokemon.types[0].type.name} />
      </View>
    </>
  )
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  imagePokemon: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: -width * 0.25,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
})