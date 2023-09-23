import axios from "axios";
import { api_endpoint } from "./config";

// Get access token from server then store it in sessionStorage
export const getAccessToken = async () => {
  const res = await axios.get(`${api_endpoint}/auth/refresh_token`, {
    withCredentials: true,
  });
  sessionStorage.setItem("accessToken", res.data.accessToken);
  return;
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
