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

import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './css/ToDoForm.module.css';
import { editIcon } from '../helpers/icons';
import Button from './UI/Button';
import EditCategory from './EditCategory/EditCategory';

const checkValidity = value => {
  if (value.trim() === '') {
    return false;
  }
  return true;
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
  const [isEditingCategory, setIsEditingCategory] = useState(false);

  const [isTodoNOK, setIsTodoNOK] = useState(false);
  const [isCategoryNOK, setIsCategoryNOK] = useState(false);

  const categories = useSelector(state => state.categories.categories);

  const handleTodoChange = e => {
    setTodo(e.target.value);
    setIsTodoNOK(false);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
    setIsCategoryNOK(false);
  };

  const handleOpenEditCategory = () => setIsEditingCategory(true);

  const handleCloseEditCategory = () => setIsEditingCategory(false);

  const handleSubmit = e => {
    e.preventDefault();
    const isTodoValid = checkValidity(todo);
    const isCategoryValid = checkValidity(category);

    isTodoValid ? setIsTodoNOK(false) : setIsTodoNOK(true);

    isCategoryValid ? setIsCategoryNOK(false) : setIsCategoryNOK(true);

    if (!isTodoValid || !isCategoryValid) return;

    onSubmit(todo, category);

    setTodo('');
    setCategory('');
    setIsTodoNOK(false);
    setIsCategoryNOK(false);

    onCloseForm && onCloseForm();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__control}>
        <div className={styles.form__todo}>
          <label htmlFor='todo'>To do: </label>
          <input
            className={isTodoNOK ? styles.error : ''}
            type='text'
            id='todo'
            name='todo'
            placeholder='Add todo...'
            value={todo}
            onChange={handleTodoChange}
          />
        </div>
        <div className={styles.form__category}>
          <label htmlFor='category'>Category</label>
          <select
            className={isCategoryNOK ? styles.error : ''}
            name='category'
            id='category'
            value={category}
            onChange={handleCategoryChange}
          >
            <option value=''>--Select a category--</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {}
      </div>
      <div className={styles.form__actions}>
        {isCancelBtn && (
          <Button
            type='button'
            classesAdded={styles.cancelBtn}
            onClick={onCloseForm}
            content='Cancel'
          />
        )}
        <Button classesAdded={styles.addBtn} content={submitBtnContent} />
        <Button
          type='button'
          classesAdded={styles.editBtn}
          content={editIcon}
          isSquare={true}
          onClick={handleOpenEditCategory}
        />
      </div>
      {isEditingCategory && <EditCategory onClose={handleCloseEditCategory} />}
    </form>
  );
};

export default ToDoForm;
