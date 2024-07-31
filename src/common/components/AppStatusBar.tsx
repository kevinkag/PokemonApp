import React from "react";
import { useTheme } from "react-native-paper";
import { useThemeContext } from "../theme/ThemeProvider";
import { StatusBar } from "react-native";

export const AppStatusBar: React.FC = () => {
  const { colors } = useTheme();
  const { isDarkTheme } = useThemeContext();

  return (
    <StatusBar
      barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      backgroundColor={colors.background}
    />
  );
};