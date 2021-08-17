import React from 'react';
import './UsersList.css';
import Card from '../UI/Card';

const UsersList = (props)=>{

 return (
 <Card className = "users">
    <ul>
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
    </Card>
 )
};

export default UsersList;
