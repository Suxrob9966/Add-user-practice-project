import React, {useState} from 'react';
import Card from '../UI/Card';

const AddUsers = (props)=> {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    
    const ageInputChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const users = {
            id: Math.trunc(Math.random() * 10).toString(),
            fName: enteredName,
            age: +enteredAge,
        };

        props.onSaveUserData(users);
    };

    return (
    <Card className="users">
    <form onSubmit={formSubmitHandler}>
      <label>Username</label>
      <input type="text" onChange={usernameChangeHandler} />
      <br/>
      <label>Age (years)</label>
      <input type="number" onChange={ageInputChangeHandler} min = '0' />
    <button type="submit">Add User</button>
  </form>
  </Card>
);
}

export default AddUsers;