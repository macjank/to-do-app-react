import { useSelector } from 'react-redux';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styles from './css/TodoListHeader.module.css';

const TodoListHeader = ({
  title,
  numOfTodos,
  onToggleVisibility,
  selectedCat,
  onChangeCategory,
  isListVisible,
}) => {
  const categories = useSelector(state => state.categories.categories);

  const arrowIcon = isListVisible ? (
    <FaAngleUp size={30} />
  ) : (
    <FaAngleDown size={30} />
  );

  return (
    <header className={styles.header}>
      <div className={styles.title} onClick={onToggleVisibility}>
        <p>
          {title} ( {numOfTodos} )
        </p>
        {arrowIcon}
      </div>
      {isListVisible && (
        <select
          className={styles.filter}
          name='categories'
          id='categories'
          value={selectedCat}
          onChange={onChangeCategory}
        >
          <option value='all'>all</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}
    </header>
  );
};

export default TodoListHeader;
