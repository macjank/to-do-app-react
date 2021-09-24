import Card from '../UI/Card';
import styles from '../css/CategoryItem.module.css';
import { deleteIcon } from '../../helpers/icons';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { categoriesActions } from '../../store/categories-slice';

const CategoryItem = ({ cat, onChangeCategory, onClose }) => {
  const dispatch = useDispatch();

  const handleChangeCategory = () => {
    onChangeCategory(cat);
    onClose();
  };

  const handleDeleteCategory = e => {
    e.stopPropagation();
    dispatch(categoriesActions.removeCategory(cat));
  };

  return (
    <Card backgroundColor='#fff' onClick={handleChangeCategory}>
      <li className={styles.item}>
        <div className={styles.item__name}>
          <h4 className={styles.item__name__content}>{cat}</h4>
        </div>
        <Button
          content={deleteIcon}
          backgroundColor='rgb(255, 52, 52)'
          onClick={handleDeleteCategory}
          isSquare={true}
        />
      </li>
    </Card>
  );
};

export default CategoryItem;
