import { deleteRequest, getRequest, postRequest } from "../../config/httpClient"
import { SERVER } from "../../config/serverConfig"
import { ADD_NEW_TASK, FETCH_TASK_SUCCESS, ERROR_WITH_CONNECTION_API } from "../types/task"

export const newTaskActionSuccess = (task) => {
  return {
    type: ADD_NEW_TASK,
    task: task
  }
}

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASK_SUCCESS,
    tasks
  }
}

export const errorWithConnectionApi = (statusCode) => {
  return {
    type: ERROR_WITH_CONNECTION_API,
    statusCode
  }
}
export const fetchTask = () => {
  return async (dispatch) => {
    const response = await getRequest(SERVER.GET_TASK());
    if(response.status === undefined){
      dispatch(fetchTasksSuccess(response));
    }else{
      dispatch(errorWithConnectionApi(response.status));
    }
  }
}

export const newTaskAction = ( task ) => {
  return async (dispatch) => {
    const response = await postRequest(SERVER.POST_TASK(), task, null)
    if(response.status === undefined){
      dispatch(fetchTask());
    }else{
      dispatch(errorWithConnectionApi(response));
    }
  }
}

export const changeStatusTask = ( idTask ) => {
  return async (dispatch) => {
    const response = await getRequest(SERVER.GET_CHANGE_STATUS_TASK(idTask));
    if(response.status === undefined ){
      dispatch(fetchTask());
    }
  }
}

export const deleteTask = ( idTask ) => {
  return async (dispatch) => {
    const response  = await deleteRequest(SERVER.DELETE_TASK(idTask));
    if(response.status === undefined){
      dispatch(fetchTask());
    }
  }
}
