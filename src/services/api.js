import { isValidUrl } from "../utils/helpers";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryFromId = async (storyId) => {
  return await fetch(`${storyUrl + storyId}.json`).then(response => response.json());
};

export const getNewStoryIds = async () => {
  return await fetch(newStoriesUrl).then(response => response.json());
};

export const getTopStoryIds = async () => {
  return await fetch(topStoriesUrl).then(response => response.json());
};

// Post story implementation using Promises
export const postStory = (payload) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (payload) {
      const isUrlValid = isValidUrl(payload.url);
      if (isUrlValid && payload.username && payload.title && payload.timestamp) {
        return resolve('Story saved successfully.');
      } else if (!isUrlValid) {
        return reject('Invalid URL');
      }
    } else {
      return reject('Bad request');
    }
  }, 2000);
});
