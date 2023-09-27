import axios from "axios";

let accessToken = null;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true,
});

// Verify access token
const verifyAccessToken = async () => {
  try {
    await axios.get("http://localhost:3001/api/auth", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log("Access token is valid");
  } catch (err) {
    console.log("Access token is invalid. Getting a new one...");
    await getAccessToken();
    console.log("Got a new access token");
  }
};

// Get access token from server then store it in local storage
const getAccessToken = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/auth/token", {
      withCredentials: true,
    });

    accessToken = res.data.accessToken;
  } catch (error) {
    throw error;
  }
};

// Set access token in request header
axiosInstance.interceptors.request.use(async (config) => {
  if (!accessToken) {
    await getAccessToken();
  }

  config.headers["Authorization"] = `Bearer ${accessToken}`;

  await verifyAccessToken();

  return config;
});
