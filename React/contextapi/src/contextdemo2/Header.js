import { useLoginContext } from "../contextdemo3/logincontext";

function Header() {
    const {loggedIn,login}=useLoginContext();
    return ( 
        <div>
            <h3>Header Component</h3>
            <p>{loggedIn? 'DashBoard':'Login'}</p>
        </div>
     );
}

export default Header;