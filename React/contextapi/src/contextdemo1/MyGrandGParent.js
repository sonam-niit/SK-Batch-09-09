import MyContextProvider from "./MyContext";
import MyGrandParent from "./MyGrandParent";

function MyGrandGParent() {
    return ( 
        <MyContextProvider>
             <h3>My Grand Grand Parent</h3>
             <MyGrandParent />
        </MyContextProvider>
     );
}

export default MyGrandGParent;