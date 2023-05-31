import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/bassUrl";

const login_admin = async (admin) => {
  const response = await axios.post(`${base_url}auth/admin-login`, admin);
  if (response.data) {
    localStorage.setItem("auth", JSON.stringify(response.data));
  }
  return response.data;
};

const admin_register = async (admin) => {
    const response = await axios.post(`${base_url}auth/admin-register`, admin, config);
  
    return response.data;
  };

const login_user = async (admin) => {
  const response = await axios.post(`${base_url}auth/user-login`, admin);
  if (response.data) {
    localStorage.setItem("auth", JSON.stringify(response.data));
  }
  return response.data;
};

const user_register = async (admin) => {
    const response = await axios.post(`${base_url}auth/user-register`, admin, config);
    return response.data;
};

const getUser = async () => {
    const response = await axios.get(`${base_url}auth/get-user`);
    return response.data;
};

const authService = {
    login_admin,
    admin_register,
    login_user,
    user_register,
    getUser,


};

export default authService;