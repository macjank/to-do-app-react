import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTodosData, sendTodosData } from "../store/todosActions";
import TodoList from "./TodoList";

let firstRun = true;

const TodoSection = () => {
  const [selectedCatUndone, setSelectedCatUndone] = useState("all");
  const [selectedCatDone, setSelectedCatDone] = useState("all");

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

  const handleChangeCatUndone = cat => {
    setSelectedCatUndone(cat);
  };
  const handleChangeCatDone = cat => {
    setSelectedCatDone(cat);
  };

  const undoneTodosToShow = todos
    .filter(todo => !todo.isDone)
    .filter(todo => {
      if (selectedCatUndone === "all") {
        return true;
      }
      return todo.category === selectedCatUndone;
    });

  const doneTodosToShow = todos
    .filter(todo => todo.isDone)
    .filter(todo => {
      if (selectedCatUndone === "all") {
        return true;
      }
      return todo.category === selectedCatUndone;
    });

  return (
    <>
      <TodoList
        done={false}
        header="Things to do"
        todos={undoneTodosToShow}
        category={selectedCatUndone}
        onChangeCat={handleChangeCatUndone}
      />
      <TodoList
        done={true}
        header="Done things"
        todos={doneTodosToShow}
        category={selectedCatDone}
        onChangeCat={handleChangeCatDone}
      />
    </>
  );
};

export default TodoSection;
