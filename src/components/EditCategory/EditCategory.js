import Card from '../UI/Card';
import Modal from '../UI/Modal';
import CategoryList from './CategoryList';
import EditCategoryForm from './EditCategoryForm';

const EditCategory = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Card backgroundColor='var(--primary-color)'>
        <CategoryList />
        <EditCategoryForm onClose={onClose} />
      </Card>
    </Modal>
  );
};

export default EditCategory;
