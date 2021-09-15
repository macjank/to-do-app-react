import ToDoItem from "./ToDoItem";
import styles from "./css/TodoList.module.css";
import Card from "./UI/Card";
import { arrowDown, arrowUp } from "../helpers/icons";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const TodoList = ({ done, header, todos }) => {
  const [isListVisible, setIsListVisible] = useState(done ? false : true);

  const handleToggleList = () => {
    setIsListVisible(prevState => !prevState);
  };

  const numOfTodos = todos.length;
  const arrowIcon = isListVisible ? (
    <FaAngleUp
      size={30}
      className={styles.arrowIcon}
      onClick={handleToggleList}
    />
  ) : (
    <FaAngleDown
      size={30}
      className={styles.arrowIcon}
      onClick={handleToggleList}
    />
  );

  if (numOfTodos === 0) {
    return (
      <div className={styles.todosContainer}>
        <h3>
          {header} ({numOfTodos}) {arrowIcon}
        </h3>
        {isListVisible && (
          <Card backgroundColor="#fff">
            <div className={styles.empty}>Nothing to show here</div>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className={styles.todosContainer}>
      <h3>
        {header} ({numOfTodos}) {arrowIcon}
      </h3>

      {isListVisible && (
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
      )}
    </div>
  );
};

export default TodoList;
