import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { categoriesActions } from '../../store/categories-slice';
import Button from '../UI/Button';
import styles from '../css/EditCategoryForm.module.css';

const checkValidity = value => {
  if (value.trim() === '') {
    return false;
  }
  return true;
};

const EditCategoryForm = ({ onClose }) => {
  const [isNewCategoryNOK, setIsNewCategoryNOK] = useState(false);
  const categoryRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isNewCategoryValid = checkValidity(categoryRef.current.value);
    setIsNewCategoryNOK(!isNewCategoryValid);

    if (!isNewCategoryValid) return;

    dispatch(categoriesActions.addCategory(categoryRef.current.value));
    onClose();
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
      <Button content='Save' onClick={handleSubmit} />
    </form>
  );
};

export default EditCategoryForm;
