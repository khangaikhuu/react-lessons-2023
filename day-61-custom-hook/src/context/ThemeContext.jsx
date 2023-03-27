import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext(null)

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext)
  return {theme, setTheme}
}

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);


      return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
      )

}


