import axios from "./axios.factory";
import IUserData from "../types/Users.types";

export const getAll = () => {
  return axios.get<Array<IUserData>>("/users");
};

const UsersService = {
  getAll,
};

export default UsersService;