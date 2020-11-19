import axios from "axios";
import { Loading } from "element-ui";

let hostname =
  window.location.protocol +
  window.location.hostname +
  ":" +
  window.location.port;
console.log(hostname);
let instance = axios.create({
  // baseURL: hostname,
  timeout: 1000,
});

let loadingInstance = null;

instance.interceptors.request.use((config) => {
  loadingInstance = Loading.service();
  return config;
});

instance.interceptors.response.use((res) => {
  loadingInstance.close();
  return res.data;
});

export default instance;
