import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(true)
    const toggle = () => {
        setLightMode(!lightMode)
    }
    return (
        <ThemeContext.Provider value={{ lightMode,toggle }}>{children}</ThemeContext.Provider>
    )

}