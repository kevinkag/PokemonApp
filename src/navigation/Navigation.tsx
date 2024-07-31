import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from '../screens/PokemonList/PokemonList';
import PokemonDetail from '../screens/PokemonDetail/PokemonDetail';
import { RootStackParamList } from './navigation.types';
import { useThemeContext } from '../common/theme/ThemeProvider';
import { CustomDarkTheme, CustomLightTheme } from '../common/theme/themes';
import HeaderRight from './Headers/HeaderRight';
import { Platform, StyleSheet } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { isDarkTheme } = useThemeContext();
  const navigationTheme = isDarkTheme ? CustomDarkTheme : CustomLightTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen name="PokemonList" component={PokemonList}
          options={{
            title: 'Pokedex',
            headerRight: () => <HeaderRight />,
            headerStyle: styles.header,
          }} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail}
          options={{
            headerRight: () => <HeaderRight />,
            headerStyle: styles.header,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});