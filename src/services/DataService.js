import http from "../http-common";

class DataService {
  singleBlog(pid) {
    return http.get(`/blog/${pid}`);
  }
  category() {
    return http.get("/cat");
  }
  
  categorypost(pid) {
    return http.get(`/categorypost/${pid}`);
  }
}

export default new DataService();