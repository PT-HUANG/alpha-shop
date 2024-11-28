import { useState, createContext, useContext } from 'react';
export const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');
  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  }
  return(
    <ThemeContext.Provider value={{
      theme: theme,
      function: toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext).theme
}

export function useToggleTheme() {
  return useContext(ThemeContext).function
}