import { useSelector } from 'react-redux';
import styles from '../css/CategoryList.module.css';
import Card from '../UI/Card';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
  const categories = useSelector(state => state.categories.categories);

  return (
    <ul className={styles.list}>
      {categories.map((cat, index) => (
        <CategoryItem key={index} cat={cat} />
      ))}
    </ul>
  );
};

export default CategoryList;
