import axios from "axios";

export const login = async (username, password) => {
  await axios.post(
    "http://localhost:3001/api/auth/login",
    {
      username,
      password,
    },
    { withCredentials: true }
  );

  return;
};
