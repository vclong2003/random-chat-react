import { axiosInstance } from "./axiosInstance";

export const login = async (username, password) => {
  const res = await axiosInstance.post(
    "/auth/login",
    {
      username,
      password,
    },
    { withCredentials: true }
  );

  return res.data;
};

export const register = async (username, password) => {
  const res = await axiosInstance.post(
    "/auth/register",
    {
      username,
      password,
    },
    { withCredentials: true }
  );

  return res.data;
};
