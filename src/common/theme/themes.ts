import { MD2DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

export const CustomDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  background: '#f0f',
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    background: '#121212',
    header: '',
    text: '#ffffff',
  },
  barStyle: 'light-content'
};

export const CustomLightTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
  },
  barStyle: 'dark-content'

};
