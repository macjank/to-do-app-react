import ToDoItem from "./ToDoItem";
import styles from "./css/TodoList.module.css";
import Card from "./UI/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const TodoList = ({ done, header, todos, category, onChangeCat }) => {
  const categories = useSelector(state => state.categories.categories);
  const [isListVisible, setIsListVisible] = useState(done ? false : true);

  const handleToggleList = () => {
    setIsListVisible(prevState => !prevState);
  };

  const handleChangeCategory = e => {
    onChangeCat(e.target.value);
  };

  const numOfTodos = todos.length;
  const arrowIcon = isListVisible ? (
    <FaAngleUp size={30} />
  ) : (
    <FaAngleDown size={30} />
  );

  let content;

  if (numOfTodos === 0) {
    content = (
      <Card backgroundColor="#fff">
        <div className={styles.empty}>Nothing to show here</div>
      </Card>
    );
  } else {
    content = (
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
  }

  return (
    <div className={styles.todosContainer}>
      <div className={styles.header}>
        <div className={styles.title} onClick={handleToggleList}>
          <p>
            {header} ( {numOfTodos} )
          </p>
          {arrowIcon}
        </div>
        {isListVisible && (
          <select
            className={styles.filter}
            name="categories"
            id="categories"
            value={category}
            onChange={handleChangeCategory}
          >
            <option value="all">all</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        )}
      </div>

      {isListVisible && content}
    </div>
  );
};

export default TodoList;
