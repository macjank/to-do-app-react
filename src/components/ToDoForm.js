//to change:
//custom component for inputs?

import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './css/ToDoForm.module.css';
import { editIcon } from '../helpers/icons';
import Button from './UI/Button';
import EditCategory from './EditCategory/EditCategory';
import { checkNameValidity } from '../helpers/checkNameValidity';

//this component is used twice in the app -
//- as a form for the new todo and as a form for editing existing todo
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

  const [isTodoOK, setIsTodoOK] = useState(true);
  const [isCategoryOK, setIsCategoryOK] = useState(true);

  const categories = useSelector(state => state.categories.categories);

  const handleChangeTodo = e => {
    setTodo(e.target.value);
    setIsTodoOK(true);
  };

  const handleChangeCategory = e => {
    setCategory(e.target.value);
    setIsCategoryOK(true);
  };

  const handleOpenEditCategory = () => setIsEditingCategory(true);

  const handleCloseEditCategory = () => setIsEditingCategory(false);

  const handleSubmit = e => {
    e.preventDefault();

    //checking validity of both todo and category
    const isTodoValid = checkNameValidity(todo);
    const isCategoryValid = checkNameValidity(category);

    //upadating state of validity for the purpose of styling
    isTodoValid ? setIsTodoOK(true) : setIsTodoOK(false);
    isCategoryValid ? setIsCategoryOK(true) : setIsCategoryOK(false);

    if (!isTodoValid || !isCategoryValid) return;

    //submiting using a props function
    onSubmit(todo, category);

    //reseting
    setTodo('');
    setCategory('');
    setIsTodoOK(true);
    setIsCategoryOK(true);

    onCloseForm && onCloseForm();
  };

  //content is displaying two different strings depending if there are any categories set up
  const catDefaultContent =
    categories.length > 0
      ? '--Select category--'
      : '--Click edit icon to add category--';

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__control}>
        <div className={styles.form__todo}>
          <label htmlFor='todo'>To do: </label>
          <input
            className={isTodoOK ? '' : styles.error}
            type='text'
            id='todo'
            name='todo'
            placeholder='Add todo...'
            value={todo}
            onChange={handleChangeTodo}
          />
        </div>
        <div className={styles.form__category}>
          <label htmlFor='category'>Category</label>
          <select
            className={isCategoryOK ? '' : styles.error}
            name='category'
            id='category'
            value={category}
            onChange={handleChangeCategory}
          >
            <option value=''>{catDefaultContent}</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

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

      {/* displaying modal for editing categories */}
      {isEditingCategory && <EditCategory onClose={handleCloseEditCategory} />}
    </form>
  );
};

export default ToDoForm;
