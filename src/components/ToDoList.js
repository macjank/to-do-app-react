import ToDoItem from './ToDoItem';
import styles from './css/TodoList.module.css';
import Card from './UI/Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TodoListHeader from './TodoListHeader';

//

const TodoList = ({ done, header, todos }) => {
  //state
  //
  const isLoading = useSelector(state => state.todos.isLoading);
  const isError = useSelector(state => state.error.isError);
  const errorInfo = useSelector(state => state.error.errorInfo);
  //displaying all categories by default
  const [selectedCat, setSelectedCat] = useState('all');

  //as a wanted default behavior: done-list is visible, undone-list is NOT visible
  const [isListVisible, setIsListVisible] = useState(done ? false : true);

  //handlers
  const handleToggleVisibility = () =>
    setIsListVisible(prevState => !prevState);
  const handleChangeCategory = e => setSelectedCat(e.target.value);

  const todosToShow = todos.filter(todo => {
    if (selectedCat === 'all') {
      return true;
    }
    return todo.category === selectedCat;
  });

  const numOfTodos = todosToShow.length;

  let content;

  if (isLoading) {
    //loading animation
    content = (
      <Card backgroundColor='#fff'>
        <div className={styles.empty}>
          <div className={styles.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Card>
    );
  } else if (isError) {
    content = (
      <Card backgroundColor='#fff'>
        <div className={styles.empty}>{errorInfo}</div>
      </Card>
    );
  } else if (numOfTodos === 0) {
    content = (
      <Card backgroundColor='#fff'>
        <div className={styles.empty}>The list is empty</div>
      </Card>
    );
  } else {
    content = (
      <ul className={styles.list}>
        {todosToShow.map(todo => {
          const { id, name, category, isDone } = todo;
          return (
            <ToDoItem
              key={id}
              id={id}
              name={name}
              category={category}
              isDone={isDone}
            />
          );
        })}
      </ul>
    );
  }

  return (
    <div className={styles.todosContainer}>
      <TodoListHeader
        title={header}
        numOfTodos={numOfTodos}
        onToggleVisibility={handleToggleVisibility}
        onChangeCategory={handleChangeCategory}
        selectedCat={selectedCat}
        isListVisible={isListVisible}
      />
      {isListVisible && content}
    </div>
  );
};

export default TodoList;
