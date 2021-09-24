import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { categoriesActions } from '../../store/categories-slice';
import Button from '../UI/Button';
import styles from '../css/EditCategoryForm.module.css';
import { checkNameValidity } from '../../helpers/checkNameValidity';

const EditCategoryForm = ({ onClose }) => {
  const [isNewCategoryNOK, setIsNewCategoryNOK] = useState(false);
  const categoryRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isNewCategoryValid = checkNameValidity(categoryRef.current.value);
    setIsNewCategoryNOK(!isNewCategoryValid);

    if (!isNewCategoryValid) return;

    dispatch(categoriesActions.addCategory(categoryRef.current.value));
    categoryRef.current.value = '';
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='category'>New Category</label>
      <input
        className={isNewCategoryNOK ? styles.error : ''}
        type='text'
        id='category'
        name='category'
        ref={categoryRef}
      />
      <div className={styles.btnContainer}>
        <Button type='button' content='Cancel' onClick={onClose} />
        <Button content='Save' onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default EditCategoryForm;
