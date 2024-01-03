import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/blog/api",
  headers: {
    "Content-type": "application/json"
  }
});