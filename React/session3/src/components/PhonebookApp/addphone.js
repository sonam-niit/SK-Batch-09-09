import { useState } from "react";

function Addphone({addContact}) {
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const handler=()=>{
        addContact({name,phone,id:Date.now()});
        setName('');
        setPhone('');
    }
    return ( 
        <div>
            <h3 className="text-bg-info p-2 text-center">Add Contact</h3>
            <div className="form-group mt-2">
                <label>Name</label>
                <input type="text" placeholder="John Doe" className="form-control"
                value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group mt-2">
                <label>Phone</label>
                <input type="phone" placeholder="9876543214" className="form-control"
                value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <button className="btn btn-secondary w-100 mt-2"
            onClick={handler}>Add Contact</button>
        </div>
     );
}

export default Addphone;