import React, {useState} from 'react'; 
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

// NOTE: All commmented sections work together
// const dummyData = [
//   { id: 'i1',
//     fName: 'Sarah',
//     age: 22,
//   }
// ];



function App() {

  // const [users, setUsers] = useState(dummyData);
  const [users, setUsers] = useState([]);

  // const addUserHandler = (user) => {
  const addUserHandler = (uName, uAge) => {
    console.log("In app.js");
    // console.log(user);
    setUsers((prevState) => [...prevState, {name: uName, age: uAge, id: Math.random().toString()}]);
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
