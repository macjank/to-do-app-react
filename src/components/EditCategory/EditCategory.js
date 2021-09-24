import Card from '../UI/Card';
import Modal from '../UI/Modal';
import CategoryList from './CategoryList';
import EditCategoryForm from './EditCategoryForm';

const EditCategory = ({ onClose, onChangeCategory }) => {
  return (
    <Modal onClose={onClose}>
      <Card backgroundColor='var(--primary-color)'>
        <CategoryList onChangeCategory={onChangeCategory} onClose={onClose} />
        <EditCategoryForm onClose={onClose} />
      </Card>
    </Modal>
  );
};

export default EditCategory;
