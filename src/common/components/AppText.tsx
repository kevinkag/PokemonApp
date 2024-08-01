import { StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'

interface TextInterface {
  children: any
  style?: any
}

export default function AppText({ children, style }: TextInterface) {
  return (
    <>
      <Text style={[style, styles.text]}>{children}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  text: {}
})