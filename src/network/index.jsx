import { Route } from "react-router-dom";

const ENDPOINT = "https://jsonplaceholder.typicode.com";
export const get = ({ route }) => {
  return fetch(ENDPOINT + route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const post = ({ route, data }) => {
  return fetch(ENDPOINT + route, {
    method: "POST",
    body: JSON.stringify({
      data,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const put = ({ route, data }) => {
  return fetch(ENDPOINT + route, {
    method: "PUT",
    body: JSON.stringify({
      data,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const patch = ({ route, data }) => {
  return fetch(ENDPOINT + route, {
    method: "PATCH",
    body: JSON.stringify({
      data,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};

export const deletes = ({ route }) => {
  return fetch(ENDPOINT + route, {
    method: "DELETE",
  }).then((response) => response.json());
};
