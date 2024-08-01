import { MD2DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

export const CustomDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    header: '#121212',
    text: '#ffffff',
    primary: '#7772FB'

  },
  barStyle: 'light-content'
};

export const CustomLightTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    header: '#ffffff',
    text: '#000000',
    primary: '#7772FB'
  },
  barStyle: 'dark-content'

};
