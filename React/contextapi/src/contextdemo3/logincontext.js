import { createContext, useContext, useState } from "react";

const LoginContext=createContext();
function LoginContextProvider({children}) {
    const [loggedIn,setLoggedIn]=useState('false');
    const login=()=>{
        if(loggedIn)
            setLoggedIn(false);
        else{
            setLoggedIn(true);
        }
    }
    return ( 
        <LoginContext.Provider value={{loggedIn,login}}>
            {children}
        </LoginContext.Provider>
     );
}

export default LoginContextProvider;

export const useLoginContext=()=>{
    return useContext(LoginContext);
}