import { createContext, useContext, useState } from "react";

const ThemeContext=createContext();
function ThemeProvider({childern}) {
    const [theme,setTheme]=useState('light');
    const toggleTheme=()=>{
        setTheme(prev=>prev==='light'?'dark':'light');
    }
    return ( 
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {childern}
        </ThemeContext.Provider>
     );
}
export default ThemeProvider;

export const useThemeContext=()=>{
    return useContext(ThemeContext);
}