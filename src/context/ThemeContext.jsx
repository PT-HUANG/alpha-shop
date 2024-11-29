import { useState, createContext, useContext } from 'react';
const ThemeContext = createContext();
const SetThemeContext = createContext();

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');
  
  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  }
  return(
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={toggleTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext)
}

export function useToggleTheme() {
  return useContext(SetThemeContext)
}