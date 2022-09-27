import axios from "axios";

axios.defaults.baseURL = "https://8000-leemoran-drfapi-yyhhxw8xrnz.ws-eu67.gitpod.io/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

// "https://django-api-frame.herokuapp.com/"; was OG baseURL 