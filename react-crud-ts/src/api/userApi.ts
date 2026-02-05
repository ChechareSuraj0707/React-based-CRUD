import axios from "axios";
import type { User } from "../types/user";

const API = "http://localhost:3001/users";

export const fetchUsers = () => axios.get<User[]>(API);

export const addUser = (user: User) => axios.post(API, user);

export const editUser = (id: number, user: User) =>
  axios.put(`${API}/${id}`, user);

export const removeUser = (id: number) => axios.delete(`${API}/${id}`);
