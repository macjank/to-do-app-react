import styles from "./css/ToDoItem.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/todos-slice";
import { checkIcon, deleteIcon, editIcon } from "../helpers/icons";
import { useState } from "react";
import EditToDo from "./EditToDo";

const ToDoItem = ({ id, name, category, isDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteTodo = () => dispatch(todosActions.deleteTodo(id));

  const handleDoneTodo = () => dispatch(todosActions.toggleIsDone(id));

  const handleOpenEditTodo = () => setIsEditing(true);

  const handleCloseEditTodo = () => setIsEditing(false);

  const classes = isDone
    ? `item__name__content ${styles.done}`
    : "item__name__content";

  return (
    <>
      <Card backgroundColor="#fff">
        <li className={styles.item}>
          <div className={styles.item__name}>
            <h4 className={classes}>{name}</h4>
          </div>
          <div className={styles.item__category}>
            <h4>{category}</h4>
          </div>
          <div className={styles.item__actions}>
            <Button
              content={checkIcon}
              backgroundColor="rgb(41, 145, 55)"
              onClick={handleDoneTodo}
              isSquare={true}
            />
            <Button
              content={deleteIcon}
              backgroundColor="rgb(255, 52, 52)"
              onClick={handleDeleteTodo}
              isSquare={true}
            />
            <Button
              content={editIcon}
              onClick={handleOpenEditTodo}
              isSquare={true}
            />
          </div>
        </li>
      </Card>
      {isEditing && (
        <EditToDo
          id={id}
          currentName={name}
          currentCategory={category}
          onClose={handleCloseEditTodo}
        />
      )}
    </>
  );
};

export default ToDoItem;
