import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTodosData, sendTodosData } from '../store/todosActions';
import TodoList from './TodoList';

let firstRun = true;

const TodoSection = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

  useEffect(() => {
    if (firstRun) {
      firstRun = false;
      return;
    }
    dispatch(sendTodosData(todos));
  }, [todos, dispatch]);

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
