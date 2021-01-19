import { DELETE, GET, POST, PUT } from './constants';

export const jsonOptions = (isFormData, token) => {
  let headers = new Headers();
  if (!isFormData) {
    headers.append('Content-Type', 'application/json');
  }
  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }
  return headers;
}

// export const getToken = () => {
//   return sessionStorage.getItem(TOKEN) ? ('' + sessionStorage.getItem(TOKEN)) : (localStorage.getItem(TOKEN) ? ('' + localStorage.getItem(TOKEN)) : '');
// }

const method = (url, method, body, isFormData, token) => {
  const options = {
    method,
    headers: jsonOptions(isFormData, token)
  }
  if (!isFormData) {
    if (Object.keys(body).length) {
      options.body = JSON.stringify(body)
    }
  } else {
    options.body = body;
  }
  return fetch(url, options)
    .then(response => response.json())
    .catch(error => ({ status: 500, message: error }));
}

export const getRequest = (url, token) => method(url, GET, {}, false, token);

export const postRequest = (url, body, token) => method(url, POST, body, false, token);

export const putRequest = (url, body, token) => method(url, PUT, body, false, token);

export const deleteRequest = (url, token) => method(url, DELETE, {}, false, token);

export const postFormData = (url, body, token) => method(url, POST, body, true, token);

// export const logout = () => {
//   localStorage.removeItem(TOKEN);
//   sessionStorage.removeItem(TOKEN);
// }