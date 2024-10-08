import { createContext, useContext, ReactNode } from 'react';
import { lightTheme, darkTheme } from './../../constants/theme';
import { useAppSelector } from '../../store/hooks';

type Theme = {
  theme: {
    backgroundColor: string;
    white: string;
    grey800: string;
    inputBackground: string;
    inputColor: string;
    error: string;
    white100: string;
    white200: string;
    blue100: string;
    buttonBackground: string;
    buttonText: string;
    disableButton: string;
    tabBarActiveTintColor: string;
    tabBarStyleBackground: string;
    tabBarInactiveTintColor: string;
    tabBarIndicatorStyle: string;
  };
};

const ThemeContext = createContext({ theme: darkTheme });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme: themeMode } = useAppSelector(state => state.store);

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): Theme => useContext<Theme>(ThemeContext);
