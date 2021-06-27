import React, { createContext, useCallback, useContext } from 'react';
import persistentData from '../utils/persistentData'
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
      paragraphText: string;
      backgroundButtonDarkMode: string;
      title: string;
      paragraphTextJoin: string;
      paragraphRoom: string;
      buttonLoginRoom: string;





      

      bodyColor: string;
      grayLine: string;
      textHighlight: string;
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

  const [theme, setTheme] = persistentData<DefaultTheme>('theme', dark);

  

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