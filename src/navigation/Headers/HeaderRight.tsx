import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemeToggleButton from '../../common/components/ThemeToggleButton';
import SearchToggleButton from '../../common/components/SearchToggleButton';

export default function HeaderRight() {
  return (
    <View style={styles.content}>
      <SearchToggleButton />
      <ThemeToggleButton />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})