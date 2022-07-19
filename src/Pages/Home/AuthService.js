import http from "./httpService";

class AuthService {
  login(userName, password) {
    return http
      .post("/login", {
        userName,
        password,
      })
      .then((res) => {
        console.log('res', res);
        alert("Login successfully");
        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
      });
  }

  logOut() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
