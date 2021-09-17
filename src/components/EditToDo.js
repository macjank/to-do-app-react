import Modal from "./UI/Modal";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/todos-slice";
import ToDoForm from "./ToDoForm";
import Card from "./UI/Card";

const EditToDo = ({ id, currentName, currentCategory, onClose }) => {
  const dispatch = useDispatch();

  const handleEditTodo = (newTodo, newCategory) => {
    dispatch(
      todosActions.editTodo({ id, name: newTodo, category: newCategory })
    );
  };

  return (
    <Modal onClose={onClose}>
      <Card backgroundColor="var(--primary-color)">
        <ToDoForm
          initialTodo={currentName}
          initialCategory={currentCategory}
          onSubmit={handleEditTodo}
          submitBtnContent="Save"
          isCancelBtn={true}
          onCloseForm={onClose}
        />
      </Card>
    </Modal>
  );
};

export default EditToDo;
