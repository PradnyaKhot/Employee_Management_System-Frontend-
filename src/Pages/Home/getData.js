import http from "./httpService";

const getDataService = {
  getAll() {
    return http.get("/getAllUsers");
  }
};
export default getDataService;
