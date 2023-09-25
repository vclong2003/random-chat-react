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
  } catch (err) {
    await getAccessToken();
  }
};

// Get access token from server then store it in local storage
const getAccessToken = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/auth/token", {
      withCredentials: true,
    });

    accessToken = res.data.accessToken;

    console.log(res.data);
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

  console.log(accessToken);

  await verifyAccessToken();

  return config;
});
