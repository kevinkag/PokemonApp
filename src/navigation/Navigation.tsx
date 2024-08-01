import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetail from '../screens/PokemonDetailScreen/PokemonDetailScreen';
import { useThemeContext } from '../common/theme/ThemeProvider';
import { CustomDarkTheme, CustomLightTheme } from '../common/theme/themes';
import HeaderRight from './Headers/HeaderRight';
import { Platform, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import PokemonScreen from '../screens/PokemonScreen/PokemonScreen';

export type RootStackParamList = {
  PokemonScreen: any;
  PokemonDetail: { url: string };
};


const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { colors } = useTheme()
  const { isDarkTheme } = useThemeContext();
  const navigationTheme = isDarkTheme ? CustomDarkTheme : CustomLightTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="PokemonScreen">
        <Stack.Screen name="PokemonScreen" component={PokemonScreen}
          options={{
            title: 'Pokedex',
            headerRight: () => <HeaderRight />,
            headerStyle: [styles.header, { backgroundColor: colors?.surface }],
          }} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail}
          options={{
            title: 'Card',
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