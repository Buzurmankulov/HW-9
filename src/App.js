import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [userList, setUserList] = useState([]);
  const deleteItem = (id, setCount) => {
    const updateItems = [...userList].filter((elem, ind) => {
      return elem.id !== id;
    });
    setUserList(updateItems);
    setCount(null);
  };

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} key="add-user" />
      <UsersList users={userList} key="use-list" deleteItem={deleteItem} />
    </>
  );
}

export default App;
