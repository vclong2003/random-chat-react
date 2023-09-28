import { axiosInstance } from "./axiosInstance";

const getUserInfo = (successCallback, errorCallback) => {
  axiosInstance
    .get("/user")
    .then((res) => {
      successCallback(res.data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export default { getUserInfo };

// export const findUserByName = async (username) => {
//   const res = await axios.get(`${api_endpoint}/user/${username}`, {
//     headers: {
//       Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
//     },
//   });
//   return res.data;
// };

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
