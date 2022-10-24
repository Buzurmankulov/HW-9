import Button from "./Button";
import Card from "./Card";
import styles from "./EroorModall.module.css";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return (
    <>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          {props.closeModal ? (
            <>
              <Button onClick={() => props.setCount(null)}>Нет</Button>
              <Button
                onClick={() => props.deleteItem(props.setId, props.setCount)}
              >
                Да
              </Button>
            </>
          ) : (
            <Button onClick={props.onConfirm}>Okay</Button>
          )}
        </footer>
      </Card>
    </>
  );
};

export default ModalOverlay;
