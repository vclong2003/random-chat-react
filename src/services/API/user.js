import { axiosInstance } from "./axiosInstance";

const getUserInfo = async () => {
  const res = await axiosInstance.get("/user");

  return res.data;
};

const findUserByName = async (username) => {
  const res = await axiosInstance.get(`/user/${username}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  return res.data;
};

// export const updateUsername = async (username) => {
//   const res = await axios.put(
//     `${api_endpoint}/user/username`,
//     {
//       username,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
//       },
//     }
//   );

//   return res.data;
// };

// export const followUser = async (followId) => {
//   const res = await axios.post(
//     `${api_endpoint}/user/${followId}/follow`,
//     {
//       followId,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
//       },
//     }
//   );

//   return res.data;
// };

// export const unfollowUser = async (unfollowId) => {
//   const res = await axios.post(
//     `${api_endpoint}/user/${unfollowId}/unfollow`,
//     {
//       unfollowId,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
//       },
//     }
//   );

//   return res.data;
// };

const userQueries = { getUserInfo, findUserByName };
export default userQueries;
