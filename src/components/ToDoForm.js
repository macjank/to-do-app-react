// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { todosActions } from "../store";
// import styles from "./css/ToDoForm.module.css";

// const checkValidity = (todo, category) => {
//   if (todo.trim() === "" || category === "") {
//     return false;
//   } else {
//     return true;
//   }
// };

// const ToDoForm = () => {
//   const [todo, setTodo] = useState("");
//   const [category, setCategory] = useState("");

//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();

//     const isFormValid = checkValidity(todo, category);

//     if (!isFormValid) {
//       console.log("NOK");
//       return;
//     }

//     const newTodo = {
//       id: Date.now(),
//       name: todo,
//       category,
//       isDone: false,
//     };

//     dispatch(todosActions.addTodo(newTodo));
//     setTodo("");
//     setCategory("");
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <div className={styles.form__todo}>
//         <label htmlFor="todo">New to-do</label>
//         <input
//           type="text"
//           id="todo"
//           name="todo"
//           placeholder="Add todo..."
//           value={todo}
//           onChange={e => setTodo(e.target.value)}
//         />
//       </div>
//       <div className={styles.form__category}>
//         <label htmlFor="todo">Category</label>
//         <select
//           name="categories"
//           id="categories"
//           value={category}
//           onChange={e => setCategory(e.target.value)}
//         >
//           <option value="">--Select a category--</option>
//           <option value="work">For Work</option>
//           <option value="home">For Home</option>
//           <option value="to-buy">To buy</option>
//         </select>
//       </div>
//       <button>Add</button>
//     </form>
//   );
// };

// export default ToDoForm;

import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./css/ToDoForm.module.css";
import { editIcon } from "../helpers/icons";
import Button from "./UI/Button";

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
  isCancelBtn,
  onCloseForm,
}) => {
  const [todo, setTodo] = useState(initialTodo);
  const [category, setCategory] = useState(initialCategory);

  const categories = useSelector(state => state.categories.categories);

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

    onCloseForm && onCloseForm();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__control}>
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
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.form__actions}>
        {isCancelBtn && (
          <Button
            type="button"
            classesAdded={styles.cancelBtn}
            onClick={onCloseForm}
            content="Cancel"
          />
        )}
        <Button classesAdded={styles.addBtn} content={submitBtnContent} />
        <Button
          type="button"
          classesAdded={styles.editBtn}
          content={editIcon}
          isSquare={true}
        />
      </div>
    </form>
  );
};

export default ToDoForm;
