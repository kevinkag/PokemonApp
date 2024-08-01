import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

export default function SearchInput({ ...props }) {
  return (
    <>
      <TextInput style={styles.input}  {...props} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    fontSize: 14,
  }
})