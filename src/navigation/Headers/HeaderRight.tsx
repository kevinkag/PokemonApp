import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemeToggleButton from '../../common/components/ThemeToggleButton';

export default function HeaderRight() {
  return (
    <View style={styles.content}>
      <ThemeToggleButton />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    gap: 18,
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})