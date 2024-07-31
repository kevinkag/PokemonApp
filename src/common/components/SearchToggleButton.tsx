import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Search from '../../assets/icons/search.svg'
import SearchInput from './SearchInput'

export default function SearchToggleButton() {
  const [isIconPressed, setIsIconPressed] = useState(false)

  const onPressIcon = () => {
    setIsIconPressed((prev) => !prev)
  }

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search button pressed')
  }

  return (
    <View style={styles.content}>
      {
        isIconPressed && <SearchInput />
      }
      <TouchableOpacity onPress={onPressIcon} style={{ opacity: isIconPressed ? 0.3 : 1 }}>
        <Search width={28} height={28} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})