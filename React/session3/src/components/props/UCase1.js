function Ucase1(props) {

    const name= props.name;
    const message= props.message;
    return ( 
        <div>
            <h3>Welcome {name}</h3>
            <h5>{(message)?message:'Good Evening..!'}</h5>
        </div>
     );
}

export default Ucase1;