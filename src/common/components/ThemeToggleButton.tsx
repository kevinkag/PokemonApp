import React from 'react';
import { Button } from 'react-native-paper';
import { useThemeContext } from '../theme/ThemeProvider';
import Sun from '../../assets/icons/sun.svg'
import Moon from '../../assets/icons/moon.svg'
import { StyleSheet } from 'react-native';


const ThemeToggleButton = () => {
  const { toggleTheme, isDarkTheme } = useThemeContext();

  return (
    <Button onPress={toggleTheme} style={styles.button}>
      {isDarkTheme ? <Sun width={30} height={30} /> : <Moon width={30} height={30} />}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
  }
})

export default ThemeToggleButton;
