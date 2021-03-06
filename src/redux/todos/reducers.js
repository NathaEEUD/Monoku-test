import { handleActions } from "redux-actions";
import {
  LOADING,
  HANDLE_API_ERROR,
  TODO_GET_LIST,
  TODO_CREATE,
  TODO_EDIT,
  TODO_DELETE,
} from "./actions";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default handleActions(
  {
    [LOADING]: (state, action) => {
      return { ...state, loading: true };
    },
    [HANDLE_API_ERROR]: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
    [TODO_GET_LIST]: (state, action) => {
      return { ...state, data: action.payload, loading: false };
    },
    [TODO_CREATE]: (state, action) => {
      return { ...state, data: [...state.data, action.payload], loading: false };
    },
    [TODO_EDIT]: (state, action) => {
      return { ...state, loading: false };
    },
    [TODO_DELETE]: (state, action) => {
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
        loading: false,
      };
    },
  },
  INITIAL_STATE,
);
