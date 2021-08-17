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

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        // const users = {
        //     id: Math.trunc(Math.random() * 10).toString(),
        //     fName: enteredName,
        //     age: +enteredAge,
        // }

        // props.onSaveUserData(users);
        props.onSaveUserData(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    };

    return (
    <Card className="input">
    <form onSubmit={formSubmitHandler}>
      <label>Username</label>
      <input type="text" onChange={usernameChangeHandler} value={enteredName}/>
      <label>Age (years)</label>
      <input type="number" onChange={ageInputChangeHandler} min = '0' value={enteredAge} />
    <Button type="submit">Add User</Button>
  </form>
  </Card>
);
}

export default AddUsers;