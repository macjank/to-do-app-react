import { todosActions } from "./index";

export const getTodosData = () => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://to-do-app-react-52fdc-default-rtdb.firebaseio.com/todos.json"
      );

      if (!response.ok) {
        throw new Error("problema");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const todosData = await sendRequest();
      dispatch(todosActions.replaceTodos(todosData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendTodosData = todos => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://to-do-app-react-52fdc-default-rtdb.firebaseio.com/todos.json",
        {
          method: "PUT",
          body: JSON.stringify(todos),
        }
      );

      if (!response.ok) {
        throw new Error("problema");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
