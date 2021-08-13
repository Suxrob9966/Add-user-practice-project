import React from 'react';
import './UsersList.css';

const UsersList = (props)=>{

 return (<ul className="user_list">
      {props.items.map(data => (
        <li
          key = {data.id}
          id={data.id}
        >
          {/* {`${data.fName} (${data.age})`} */}
          {data.fName} ({data.age})
        </li>
      ))}
    </ul>
 )
};

export default UsersList;
