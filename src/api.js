import axios from "axios";
import { getStoredUser } from "./storage/user";

const URL = "http://206.189.91.54/api/v1";

export const fetchChannels = async () => {
  response = await axios.get(`${URL}/channels`, {
    headers: getStoredUser().headers,
  });
  console.log("channels", response);
  return response.data;
};

export const registerUser = async (newUser) => {
  return await axios
    .post(`${URL}/auth/`, newUser)
    .then((response) => response.data);
};

export const loginUser = async (user) => {
  return await axios.post(`${URL}/auth/sign_in`, user);
};
