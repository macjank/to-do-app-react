import { useSelector } from 'react-redux';
import styles from '../css/CategoryList.module.css';
import Card from '../UI/Card';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
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

  // if (categories.length > 0) {
  //   content = (
  //     <ul className={styles.list}>
  //       {categories.map((cat, index) => (
  //         <CategoryItem key={index} cat={cat} />
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    <ul className={styles.list}>
      {categories.map((cat, index) => (
        <CategoryItem key={index} cat={cat} />
      ))}
    </ul>
  );
};

export default CategoryList;
