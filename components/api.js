import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3004/",
  headers: {
    Accept: "application/json",
    "content-Type": "application/json; charset=utf-8",
  },
});
