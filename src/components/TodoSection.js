import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { categoriesActions } from '../store/categories-slice';
import { getTodosData, sendTodosData } from '../store/todosActions';
import TodoList from './TodoList';

//helper variable to avoid sending empty array of data to firebase on the first render
let firstRun = true;

const TodoSection = () => {
  //todos and dispatches are managed in one place and only parts of todos are splitted into TodoList components
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

  useEffect(() => {
    //avoid sending empty array of data to firebase on the first render
    if (firstRun) {
      firstRun = false;
      return;
    } else {
      dispatch(sendTodosData(todos));
    }
  }, [todos, dispatch]);

  useEffect(() => {
    const categories = todos.map(todo => todo.category);

    const uniqueCategories = categories.filter((cat, index, self) => {
      return self.indexOf(cat) === index;
    });

    dispatch(categoriesActions.replaceCategories(uniqueCategories));
  }, [todos]);

  //rendering two sibling TodoLists - one for done todos, one for un-done
  return (
    <>
      <TodoList
        done={false}
        header='Things to do'
        todos={todos.filter(todo => !todo.isDone)}
      />
      <TodoList
        done={true}
        header='Done things'
        todos={todos.filter(todo => todo.isDone)}
      />
    </>
  );
};

export default TodoSection;
