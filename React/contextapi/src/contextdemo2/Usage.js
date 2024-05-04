import { useThemeContext } from "./themecontext";

function Usage() {
    const {theme,toggleTheme}=useThemeContext();
    return ( 
        <div style={{background: theme==='light'?'#fff':'#333',
        color:theme==='light'?'#333':'#fff'}}>
            <h2>Header</h2>
            <button onClick={toggleTheme}>Toggle</button>
            <p>Current Theme: {theme}</p>
        </div>
     );
}

export default Usage;