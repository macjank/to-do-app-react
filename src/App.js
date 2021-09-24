import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from './store/todos-slice';
import './App.css';
import ToDoForm from './components/ToDoForm';
import TodoSection from './components/TodoSection';
import Card from './components/UI/Card';
import { categoriesActions } from './store/categories-slice';
import { getTodosData, sendTodosData } from './store/todosActions';

//helper variable to avoid sending empty array of data to firebase on the first render
let firstRun = true;

function App() {
  //todos and dispatches are managed in one place and only parts of todos are splitted into TodoList components
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  //fetching all todos from firebase
  useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

  //sending new todos to firebase after every change of 'todos'
  useEffect(() => {
    //avoid sending empty array of data to firebase on the first render
    if (firstRun) {
      firstRun = false;
      return;
    } else {
      dispatch(sendTodosData(todos));
    }
  }, [todos, dispatch]);

  //fetching current categories on the base of 'todos'
  useEffect(() => {
    const categories = todos.map(todo => todo.category);

    const uniqueCategories = categories.filter((cat, index, self) => {
      return self.indexOf(cat) === index;
    });

    dispatch(categoriesActions.replaceCategories(uniqueCategories));
  }, [todos, dispatch]);

  //function for submitting new todo
  const handleSubmitNewTodo = (todo, category) => {
    const newTodo = {
      //setting timestamp as an ID. For user-entered data should be enough
      id: Date.now(),
      name: todo,
      category,
      isDone: false,
    };
    dispatch(todosActions.addTodo(newTodo));
  };

  return (
    <div className='App'>
     
        <ToDoForm
          initialTodo=''
          initialCategory=''
          onSubmit={handleSubmitNewTodo}
          submitBtnContent='Add'
        />
        <TodoSection />
     
    </div>
  );
}

export default App;
