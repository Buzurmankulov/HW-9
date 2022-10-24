import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
// import Wrapper from "../Helpers/Wrapper";
import { Fragment } from "react";
import ErrorModall from "../UI/ErrorModall";
import { useRef } from "react";
const AddUser = (props) => {
  const userName = useRef();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isError, setIsError] = useState({
    title: "Ivalid input",
    message: "Please enter a valid name and age (non-empty values)",
  });

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(userName.current.value);

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Ivalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });

      return;
    }
    if (+enteredAge < 1) {
      setIsError({
        title: "Ivalid input",
        message: "Please enter a valid age (> 0)",
      });
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
    userName.current.value = "";
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setIsError(null);
  };
  return (
    <>
      {isError && (
        <ErrorModall
          title={isError.title}
          message={isError.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <input ref={userName} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
