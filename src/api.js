import axios from "axios";
import { getStoredUser } from "./storage/user";

const URL = import.meta.env.VITE_APP_URL;

export const registerUser = async (newUser) => {
  return await axios
    .post(`${URL}/auth/`, newUser)
    .then((response) => response.data);
};

export const loginUser = async (user) => {
  return await axios.post(`${URL}/auth/sign_in`, user);
};

export const fetchChannels = async () => {
  return await axios
    .get(`${URL}/channels`, {
      headers: getStoredUser().headers,
    })
    .then((response) => {
      return response.data;
    });
};

export const createChannel = async (newChannel) => {
  return await axios
    .post(`${URL}/channels`, newChannel, {
      headers: getStoredUser().headers,
    })
    .then((response) => {
      if (response.data.errors) throw response.data.errors;
      return response.data;
    });
};

export const fetchUsers = async () => {
  return await axios
    .get(`${URL}/users`, {
      headers: getStoredUser().headers,
    })
    .then((response) => {
      return response.data.data;
    });
};

export const fetchMessages = async (id, type) => {
  return await axios
    .get(`${URL}/messages?receiver_id=${id}&receiver_class=${type}`, {
      headers: getStoredUser().headers,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("message", err);
    });
};

export const createMessage = async (message) => {
  return await axios
    .post(`${URL}/messages`, message, {
      headers: getStoredUser().headers,
    })
    .then((response) => response.data);
};

export const fetchChannelDetails = async (id) => {
  return await axios
    .get(`${URL}/channels/${id}`, {
      headers: getStoredUser().headers,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("message", err);
    });
};

export const inviteUser = async (body) => {
  return await axios
    .post(`${URL}/channel/add_member`, body, {
      headers: getStoredUser().headers,
    })
    .then((response) => {
      return response.data;
    });
};
