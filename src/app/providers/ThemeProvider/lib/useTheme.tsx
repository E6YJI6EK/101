import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "app/providers/ThemeProvider/lib/ThemeContext";

interface useThemeResult{
    toggleTheme: () => void;
    theme: Themes
}  

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleThemes = () => {
        const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme: theme,
        toggleTheme: toggleThemes
    }
}