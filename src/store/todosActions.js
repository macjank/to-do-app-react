import { todosActions } from './todos-slice';
import { errorActions } from './error-slice';

export const getTodosData = () => {
  return async dispatch => {
    const sendRequest = async () => {
      dispatch(errorActions.deactivateError());
      dispatch(todosActions.activateLoading());
      const response = await fetch(
        'https://to-do-app-react-52fdc-default-rtdb.firebaseio.com/todos.json'
      );

      if (!response.ok) {
        throw new Error('problema');
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const todosData = await sendRequest();
      dispatch(todosActions.replaceTodos(todosData));
      dispatch(todosActions.deactivateLoading());
    } catch (error) {
      dispatch(todosActions.deactivateLoading());
      dispatch(
        errorActions.activateError('Getting data from the server has failed')
      );
    }
  };
};

export const sendTodosData = todos => {
  return async dispatch => {
    const sendRequest = async () => {
      dispatch(errorActions.deactivateError());
      const response = await fetch(
        'https://to-do-app-react-52fdc-default-rtdb.firebaseio.com/todos.json',
        {
          method: 'PUT',
          body: JSON.stringify(todos),
        }
      );

      if (!response.ok) {
        throw new Error('problema');
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
      dispatch(
        errorActions.activateError('Sending data to the server has failed')
      );
    }
  };
};
