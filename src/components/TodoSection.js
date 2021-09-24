import { useSelector } from 'react-redux';
import TodoList from './TodoList';

const TodoSection = () => {
  const todos = useSelector(state => state.todos.todos);

  const undoneTodos = todos.filter(todo => !todo.isDone);
  const doneTodos = todos.filter(todo => todo.isDone);

  //rendering two sibling TodoLists - one for DONE todos, one for UN-DONE
  return (
    <>
      <TodoList done={false} header='Things to do' todos={undoneTodos} />
      <TodoList done={true} header='Done things' todos={doneTodos} />
    </>
  );
};

export default TodoSection;
