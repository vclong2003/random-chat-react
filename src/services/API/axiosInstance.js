import axios from "axios";

let accessToken = null;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true,
});

// Get access token from server then store it in local storage
const getAccessToken = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/auth/token", {
      withCredentials: true,
    });

    accessToken = res.data.accessToken;
    return;
  } catch (error) {
    throw error;
  }
};

// Set access token in request header
axiosInstance.interceptors.request.use(
  async (config) => {
    if (!accessToken) {
      await getAccessToken();
    }
    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      console.log("token expired, getting new one");
      await getAccessToken();

      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

      console.log("got new token, restarting");
      return axiosInstance(originalRequest);
    }

    console.log("other error occured");
    return Promise.reject(error);
  }
);
