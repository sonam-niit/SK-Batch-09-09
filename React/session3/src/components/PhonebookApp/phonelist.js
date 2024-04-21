import { useState } from "react";
import Addphone from "./addphone";
import UpdatePhone from "./updatephone";

function PhoneList() {
    const [contacts, setContacts] = useState([]);
    const [selected,setSelected]= useState(null);
    const addContact = (data) => {
        setContacts([...contacts, data]);
    }
    const updateContact=(data)=>{
        const index= contacts.findIndex(item=>item.id==data.id);
        contacts[index]=data;
        setContacts([...contacts]);
    }
    return (
        <div>
            <h2 className="text-bg-warning p-2 text-center">PhoneBook</h2>
            <table className="table table-bordered">
                <thead><tr><th>Name</th><th>Phone</th><th>Operations</th></tr></thead>
                <tbody>
                    {
                        contacts.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button className="btn btn-success float-end ms-2"
                                    onClick={()=>setSelected(item)}>edit</button>
                                    <button className="btn btn-danger float-end">X</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="row">
                <div className="col">
                    <Addphone addContact={addContact} />
                </div>
                <div className="col">
                    { selected && <UpdatePhone selected={selected} setSelected={setSelected}
                    updateContact={updateContact}/>}
                </div>
            </div>
        </div>
    );
}

export default PhoneList;