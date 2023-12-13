import React,{useContext,createContext, useState,useEffect} from 'react'

const ThemeContext = createContext();

export const useTheme = () => {
    return (
        useContext(ThemeContext)
    )
}

function ThemeProvider(props) {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme) {
            setTheme(storedTheme);
        }
    },[])
    // Update styles based on the new theme
    useEffect(() => {
        document.body.className = `${theme}-theme`;
        localStorage.setItem('theme',theme);
    }, [theme]);
    function toggleTheme(){
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }
    const themeContextValues = {
        theme,toggleTheme
    }
    return (
        <ThemeContext.Provider value={themeContextValues}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider