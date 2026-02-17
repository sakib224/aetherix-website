import { BASEURL } from "@/config";
import axios from "axios";

let https = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-type": "application/json",
    accept: "application/json",
  },
  transformResponse: function (data) {
    let response = JSON.parse(data);
    return response;
  },

  validateStatus: function (status) {
    return true;
  },
});

// baseConnection.interceptors.request.use(async (config) => {
//     // config.headers.Authorization = `${JSON.parse(token)}`;
//   return config;
// });

export default https;
