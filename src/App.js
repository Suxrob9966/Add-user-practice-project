import React, {useState} from 'react'; 
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

const dummyData = [
  { id: 'i1',
    fName: 'Sarah',
    age: 22,
  }
];



function App() {

  const [users, setUsers] = useState(dummyData);

  const addUserHandler = (user) => {
    console.log("In app.js");
    console.log(user);
    setUsers((prevState) => [user, ...prevState]);
  };

  return (
    <div>
    <AddUsers onSaveUserData = {addUserHandler}/>
    {/* <p>{users.map(data => console.log(data.id, data.fName, data.age))}</p> */}
    <UsersList items = {users}/>
    </div>
  );
}

export default App;
