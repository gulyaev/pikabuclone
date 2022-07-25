import axios from "axios";
const baseURL = `http://localhost:5000/api/`;

export const userApi = {
  getUsers(currentPage, perPage) {
    return axios.get(
      baseURL + `user?currentpage=${currentPage}&perpage=${perPage}`
    );
  },

  getOneUser(userId) {
    return axios.get(baseURL + `user/${userId}`);
  },

  getStatus(userId) {
    return axios.get(baseURL + `status`);
  },

  updateStatus(status) {
    const bodyParameters = {
      status,
    };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    return axios.put(baseURL + `user/status`, bodyParameters, config);
  },
};
