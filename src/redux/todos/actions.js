import { createAction } from "redux-actions";
import api from "../../api";

export const LOADING = "LOADING";
export const HANDLE_API_ERROR = "HANDLE_API_ERROR";
export const TODO_GET_LIST = "TODO_GET_LIST";
export const TODO_CREATE = "TODO_CREATE";
export const TODO_EDIT = "TODO_EDIT";
export const TODO_DELETE = "TODO_DELETE";

export const loading = createAction(LOADING);
export const handleApiError = createAction(HANDLE_API_ERROR);
export const todoGetList = createAction(TODO_GET_LIST);
export const todoCreate = createAction(TODO_CREATE);
export const todoEdit = createAction(TODO_EDIT);
export const todoDelete = createAction(TODO_DELETE);

export const getTodos = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await api.todos.get();
    dispatch(todoGetList(response.data));
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

export const createTodo = (data) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await api.todos.create(data);
    dispatch(todoCreate(response.data));
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

export const deleteTodo = (todoId) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await api.todos.delete(todoId);
    if (response.data.success) {
      dispatch(deleteTodo(todoId));
    }
  } catch (error) {
    dispatch(handleApiError(error));
  }
};

export const editTodo = (taskId, data) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await api.todos.edit(taskId, data);
    if (response.data.success) {
      getTodos();
    }
  } catch (error) {
    dispatch(handleApiError(error));
  }
};
