import axios from "axios";
import { api_endpoint } from "./config";
import { axiosInstance } from "./axiosInstance";

const getAllTweets = async () => {
  const res = await axios.get(`${api_endpoint}/post`, {
    withCredentials: true,
  });
  return res.data;
};

const post = (content, successCallback, errorCallback) => {
  axiosInstance
    .post(
      `/post`,
      {
        content,
      },
      { withCredentials: true }
    )
    .then((res) => {
      successCallback(res.data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

const deleteTweet = async (tweetId) => {
  const res = await axios.delete(`${api_endpoint}/post/${tweetId}`, {
    withCredentials: true,
  });

  return res.data;
};

const likeTweet = async (tweetId) => {
  const res = await axios.post(
    `${api_endpoint}/post/${tweetId}/like`,
    {
      tweetId,
    },
    { withCredentials: true }
  );

  return res.data;
};

const unlikeTweet = async (tweetId) => {
  const res = await axios.delete(
    `${api_endpoint}/post/${tweetId}/unlike`,
    {
      tweetId,
    },
    { withCredentials: true }
  );

  return res.data;
};

const commentTweet = async (tweetId, content) => {
  const res = await axios.post(
    `${api_endpoint}/post/${tweetId}/comment`,
    {
      tweetId,
      content,
    },
    { withCredentials: true }
  );

  return res.data;
};

const postQueries = { getAllTweets, post };
export default postQueries;
