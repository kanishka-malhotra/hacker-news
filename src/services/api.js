export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryFromId = async (storyId) => {
  const response = await fetch(`${storyUrl + storyId}.json`);
  return response.json();
};

export const getNewStoryIds = async () => {
  const response = await fetch(newStoriesUrl);
  return response.json();
};