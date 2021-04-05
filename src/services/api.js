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

export const postStory = async () => {
  return await fetch(storyUrl, { method: 'POST' }).then(response => response.json());
};
