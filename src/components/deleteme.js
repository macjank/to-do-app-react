import { useState } from "react";
import styles from "./css/ToDoForm.module.css";

const checkValidity = (todo, category) => {
  if (todo.trim() === "" || category === "") {
    return false;
  } else {
    return true;
  }
};

const ToDoForm = ({
  initialTodo,
  initialCategory,
  onSubmit,
  submitBtnContent,
}) => {
  const [todo, setTodo] = useState(initialTodo);
  const [category, setCategory] = useState(initialCategory);

  const handleSubmit = e => {
    e.preventDefault();
    const isFormValid = checkValidity(todo, category);

    if (!isFormValid) {
      console.log("NOK");
      return;
    }

    onSubmit(todo, category);
    setTodo("");
    setCategory("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__todo}>
        <label htmlFor="todo">To do: </label>
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Add todo..."
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
      </div>
      <div className={styles.form__category}>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">--Select a category--</option>
          <option value="work">For Work</option>
          <option value="home">For Home</option>
          <option value="to-buy">To buy</option>
        </select>
      </div>
      <button>{submitBtnContent}</button>
    </form>
  );
};

export default ToDoForm;
