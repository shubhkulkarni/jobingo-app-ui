import axios from "axios";
const services = axios.create({
  baseURL: "https://erv538.sse.codesandbox.io/api/"
});
services.defaults.withCredentials = true;
const { get, post, put, patch } = services;
export { get, post, put, patch, services };
