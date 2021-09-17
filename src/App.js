import { useDispatch } from "react-redux";
import { todosActions } from "./store/todos-slice";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import TodoSection from "./components/TodoSection";
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
        <TodoSection />
      </Card>
    </div>
  );
}

export default App;
