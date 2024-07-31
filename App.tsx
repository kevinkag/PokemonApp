import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from './src/screens/PokemonList/PokemonList';
import PokemonDetail from './src/screens/PokemonDetail/PokemonDetail';
import { RootStackParamList } from './src/screens/PokemonList/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, useThemeContext } from './src/common/theme/ThemeProvider';
import Navigation from './src/navigation/Navigation';
import { AppStatusBar } from './src/common/components/AppStatusBar';

const Stack = createStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();



export default function App() {
  return (
    <ThemeProvider>
      <AppStatusBar />
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
