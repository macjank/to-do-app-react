import { todosActions } from './todos-slice';
import { errorActions } from './error-slice';
import { loadingActions } from './loading-slice';

export const getTodosData = () => {
  return async dispatch => {
    const sendRequest = async () => {
      dispatch(errorActions.deactivateError());
      dispatch(loadingActions.activateLoading());
      const response = await fetch(
        'https://to-do-app-react-52fdc-default-rtdb.firebaseio.com/todos.json'
      );

      if (!response.ok) {
        throw new Error('Getting data from the server has failed');
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const todosData = await sendRequest();
      dispatch(todosActions.replaceTodos(todosData));
      dispatch(loadingActions.deactivateLoading());
    } catch (error) {
      dispatch(loadingActions.deactivateLoading());
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
        throw new Error('Sending data to the server has failed');
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
