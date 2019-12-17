import axios from "axios";

const requestHelper = axios.create({
  // baseURL: "http://monoku-tasks.herokuapp.com/493iCjqFQg0yIxd4Euqw/",
  baseURL: "http://localhost:8801",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default {
  todos: {
    get: () => requestHelper({ url: "mongodb", method: "get" }),
    create: (data) => requestHelper({ url: "add", method: "post", data }),
    edit: (data) => requestHelper({ url: "update", method: "put", data }),
    delete: (taskId) => requestHelper({ url: `${taskId}/delete`, method: "put" }),
  },
};
