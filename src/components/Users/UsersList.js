import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import { useState } from "react";
import ErrorModall from "../UI/ErrorModall";
import ModalOverlay from "../UI/ErrorModall";

const UsersList = (props) => {
  const [coun, setCount] = useState();
  const [closeModal, setCloseModal] = useState(true);
  const [id, setId] = useState("");

  const closeMOdalHandler = (id) => {
    setCount({ message: "Вы действительно хотите удалить?" });
    setId(id);
  };

  console.log(id);

  return (
    <>
      {coun && (
        <ModalOverlay
          {...coun}
          closeModal={closeModal}
          setCount={setCount}
          deleteItem={props.deleteItem}
          setId={id}
        />
      )}
      <Card className={classes.users}>
        <ul>
          {props.users.map((user, index) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
              <button
                className="delete"
                onClick={() => closeMOdalHandler(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
