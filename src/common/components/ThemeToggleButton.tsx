import React from 'react';
import { Button } from 'react-native-paper';
import { useThemeContext } from '../theme/ThemeProvider';
import Sun from '../../assets/icons/sun.svg'
import Moon from '../../assets/icons/moon.svg'
import { StyleSheet, TouchableOpacity } from 'react-native';


const ThemeToggleButton = () => {
  const { toggleTheme, isDarkTheme } = useThemeContext();

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.button}>
      {isDarkTheme ? <Sun width={30} height={30} /> : <Moon width={30} height={30} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
  }
})

export default ThemeToggleButton;
