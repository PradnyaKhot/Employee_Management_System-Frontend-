import http from "./httpService";

const UserDataService = {
  create(data) {
    return http.post("/addUser", data);
  },
};

export default UserDataService;
