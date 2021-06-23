import React, { createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { light, dark } from '../styles/theme/theme'

// nome das variavéis para definir as cores
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      backgroundAside: string;
      borderInput: string;



      text: string;
      bodyColor: string;
      grayLine: string;
      textHighlight: string;
      title: string;
      invertWhite: string;
      invertBlack: string;
      overlay: string;
    }
  }
}


interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}



const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    if (theme.title === 'light') {
      setTheme(dark);
    }
    else if (theme.title === 'dark') {
      setTheme(light);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;