function UserDetail({selected}) {
    return ( 
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    {selected.name}
                </li>
                <li className="list-group-item">
                    {selected.email}
                </li>
                <li className="list-group-item">
                    {selected.username}
                </li>
            </ul>
        </div>
     );
}

export default UserDetail;