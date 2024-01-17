import { ReactNode, createContext, useContext, useState } from "react"

type Theme = typeof light

import light from "../themes/light"
import dark from "../themes/dark"

interface IThemeContext {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(light)

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme.title === "light" ? dark : light))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
