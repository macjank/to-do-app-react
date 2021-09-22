import Card from '../UI/Card';
import styles from '../css/CategoryItem.module.css';
import { deleteIcon } from '../../helpers/icons';
import Button from '../UI/Button';

const CategoryItem = ({ cat }) => {
  return (
    <Card backgroundColor='#fff'>
      <li className={styles.item}>
        <div className={styles.item__name}>
          <h4 className={styles.item__name__content}>{cat}</h4>
        </div>
        <Button
          content={deleteIcon}
          backgroundColor='rgb(255, 52, 52)'
          // onClick={handleDeleteTodo}
          isSquare={true}
        />
      </li>
    </Card>
  );
};

export default CategoryItem;
