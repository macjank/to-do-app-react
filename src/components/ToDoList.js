import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./css/ToDoList.module.css";
import ToDoItem from "./ToDoItem";
import { getTodosData, sendTodosData } from "../store/todosActions";

let firstRun = true;

const ToDoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosData());
  }, []);

  useEffect(() => {
    if (firstRun) {
      firstRun = false;
      return;
    }
    dispatch(sendTodosData(todos));
  }, [todos]);

  return (
    <ul className={styles.list}>
      {todos.map(todo => {
        const { id, name, category, isDone } = todo;
        return (
          <ToDoItem
            key={id}
            id={id}
            name={name}
            category={category}
            isDone={isDone}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
