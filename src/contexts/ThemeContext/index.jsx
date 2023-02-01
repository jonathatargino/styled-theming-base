import { createContext, useState, useMemo } from "react";
import themes from "../../styles/themes";

export const ThemeContext = createContext();

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme()  {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
    console.log("mudando")
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme, currentTheme, handleToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}