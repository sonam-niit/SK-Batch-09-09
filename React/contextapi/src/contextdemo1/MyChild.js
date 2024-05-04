import { useMyContext } from "./MyContext";

function MyChild() {

    const {data,setData}=useMyContext ();
    return ( 
        <div>
            <h3>My Child: {data}</h3>
            <input type="text" value={data}
            onChange={(e)=>setData(e.target.value)}/>
        </div>
     );
}

export default MyChild;