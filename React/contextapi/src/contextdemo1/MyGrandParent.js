import MyParent from "./MyParent";

function MyGrandParent() {
    return ( 
        <div>
            <h3>My Grand Parent</h3>
            <MyParent />
        </div>
     );
}

export default MyGrandParent;