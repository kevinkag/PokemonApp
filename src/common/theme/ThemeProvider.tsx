import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Appearance, useColorScheme, ColorSchemeName, AppearanceListener, StatusBar, StatusBarStyle } from 'react-native';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { CustomDarkTheme, CustomLightTheme } from './themes';

interface ThemeContextType {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => { },
  isDarkTheme: false,
});

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemColorScheme === 'dark');

  const { colors } = useTheme();

  useEffect(() => {
    const listener: AppearanceListener = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      setIsDarkTheme(colorScheme === 'dark');
    };

    const subscription = Appearance.addChangeListener(listener);
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };



  // Define StatusBar styles based on the theme

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <PaperProvider theme={isDarkTheme ? CustomDarkTheme : CustomLightTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
