import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import usePersistedState from './usePersistedState';

const defaultTheme = {
  backgroundColor: 'hsl(0, 0%, 98%)',
  textColor: 'hsl(200, 15%, 8%)',
  elementsColor: 'hsl(0, 0%, 100%)',
  inputsColor: 'hsl(0, 0%, 52%)',
};

export const ThemeContext = React.createContext();
export const ThemeProvider = props => {
  const [theme, setTheme] = usePersistedState('theme', 'default');
  const context = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return (
    <ThemeContext.Provider value={context}>
      <StyledThemeProvider
        theme={defaultTheme}
        {...props}
      />
    </ThemeContext.Provider>
  );
};
