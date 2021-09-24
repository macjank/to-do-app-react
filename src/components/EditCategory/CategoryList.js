import { useSelector } from 'react-redux';
import styles from '../css/CategoryList.module.css';
import Card from '../UI/Card';
import CategoryItem from './CategoryItem';

const CategoryList = ({ onChangeCategory, onClose }) => {
  const categories = useSelector(state => state.categories.categories);
  console.log(categories);

  if (categories.length === 0) {
    return (
      <Card backgroundColor='#fff'>
        <div className={styles.empty}>
          The list is empty. Enter a new category.
        </div>
      </Card>
    );
  }

  return (
    <ul className={styles.list}>
      {categories.map((cat, index) => (
        <CategoryItem
          key={index}
          cat={cat}
          onChangeCategory={onChangeCategory}
          onClose={onClose}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
