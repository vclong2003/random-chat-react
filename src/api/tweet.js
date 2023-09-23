import axios from "axios";
import { api_endpoint } from "./config";

export const getAllTweets = async () => {
  const res = await axios.get(`${api_endpoint}/post`, {
    withCredentials: true,
  });
  return res.data;
};

export const post = async (content) => {
  const res = await axios.post(
    `${api_endpoint}/post`,
    {
      content,
    },
    { withCredentials: true }
  );

  return res.data;
};

export const deleteTweet = async (tweetId) => {
  const res = await axios.delete(`${api_endpoint}/post/${tweetId}`, {
    withCredentials: true,
  });

  return res.data;
};

export const likeTweet = async (tweetId) => {
  const res = await axios.post(
    `${api_endpoint}/post/${tweetId}/like`,
    {
      tweetId,
    },
    { withCredentials: true }
  );

  return res.data;
};

export const unlikeTweet = async (tweetId) => {
  const res = await axios.delete(
    `${api_endpoint}/post/${tweetId}/unlike`,
    {
      tweetId,
    },
    { withCredentials: true }
  );

  return res.data;
};

export const commentTweet = async (tweetId, content) => {
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
