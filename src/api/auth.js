import axios from "axios";
import { api_endpoint } from "./config";

export const getAccessToken = async () => {
  const res = await axios.get(`${api_endpoint}/auth/refresh_token`, {
    withCredentials: true,
  });
  return res.data;
};

export const login = async (username, password) => {
  const res = await axios.post(
    `${api_endpoint}/auth/login`,
    {
      username,
      password,
    },
    { withCredentials: true }
  );

  return res.data;
};

export const register = async (username, password) => {
  const res = await axios.post(
    `${api_endpoint}/auth/register`,
    {
      username,
      password,
    },
    { withCredentials: true }
  );

  return res.data;
};
