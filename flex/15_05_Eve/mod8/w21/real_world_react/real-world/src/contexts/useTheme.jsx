import { createContext, useState, useContext } from "react";

const themeContext = createContext();


const useTheme = () => {
  return useContext(themeContext)
}

const ThemeProvider = ({children}) => {
  const [themeToggle, setThemeToggle] = useState(false);
  const handleThemeToggle = () => setThemeToggle(!themeToggle)

  const value = { themeToggle, handleThemeToggle}
  console.log(themeContext)

  return (
    <themeContext.Provider value={value}>
      {children}
    </themeContext.Provider>
  )
}

export { useTheme, ThemeProvider, themeContext}