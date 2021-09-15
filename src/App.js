import { useDispatch } from "react-redux";
import { todosActions } from "./store";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Card from "./components/UI/Card";

function App() {
  const dispatch = useDispatch();

  const handleSubmitNewTodo = (todo, category) => {
    const newTodo = {
      id: Date.now(),
      name: todo,
      category,
      isDone: false,
    };
    dispatch(todosActions.addTodo(newTodo));
  };

  return (
    <div className="App">
      <Card backgroundColor={"var(--primary-color)"}>
        <ToDoForm
          initialTodo=""
          initialCategory=""
          onSubmit={handleSubmitNewTodo}
          submitBtnContent="Add"
        />
        <ToDoList />
      </Card>
    </div>
  );
}

export default App;
