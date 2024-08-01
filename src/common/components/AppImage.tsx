import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppImage({ uri, width, height, style }: any) {
  return (
    <>
      <Image source={{ uri }} width={width} height={height} style={[style, styles.image]} />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    overflow: 'hidden'
  }
})