import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './AddUsers.css';

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
    <Card className="input">
    <form onSubmit={formSubmitHandler}>
      <label>Username</label>
      <input type="text" onChange={usernameChangeHandler} />
      <label>Age (years)</label>
      <input type="number" onChange={ageInputChangeHandler} min = '0' />
    <Button type="submit">Add User</Button>
  </form>
  </Card>
);
}

export default AddUsers;