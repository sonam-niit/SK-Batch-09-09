import Parent from "./Parent";

function GrandParent({name}) {
    return ( 
        <div>
            <h3>Grand Parent</h3>

            <Parent name={name}/>
        </div>
     );
}

export default GrandParent;