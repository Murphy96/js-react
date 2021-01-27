import { ADD_NEW_TASK, ERROR_WITH_CONNECTION_API, FETCH_TASK_SUCCESS } from "../types/task";

const initialState = {
  task: {},
  tasks: [],
  error: 200,
}

export const taskReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.tasks
      }
    case ADD_NEW_TASK:
      return {
        ...state,
      }
    case ERROR_WITH_CONNECTION_API:
      return {
        ...initialState,
        error: action.statusCode
      }
    default:
      return state;
  }
}
