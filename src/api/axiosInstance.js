import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true,
});

// Get access token from server then store it in sessionStorage
export const getAccessToken = async () => {
  const res = await axiosInstance.get("/auth/token");

  localStorage.setItem("accessToken", res.data.accessToken);
  return res.data.accessToken;
};

// Get new access token if 403 response is received
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 403) {
      const newAccessToken = await getAccessToken();
      error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

      return axiosInstance(error.config);
    }
    return Promise.reject(error);
  }
);

// Set access token in request header
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
