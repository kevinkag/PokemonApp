import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, useTheme } from 'react-native-paper'

export default function AppLoader() {

  const { colors } = useTheme();

  return (
    <>
      <ActivityIndicator style={styles.loader} size="small" color={colors.primary} />
    </>
  )
}

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
  },
})