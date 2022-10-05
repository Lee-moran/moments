import axios from "axios";

axios.defaults.baseURL = "https://api-moments-new.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
