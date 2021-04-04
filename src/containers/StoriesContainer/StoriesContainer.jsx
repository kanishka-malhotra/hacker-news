import { useEffect, useState } from 'react';

import Story from '../../components/Story';
import { getNewStoryIds } from '../../services/api';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds().then(response => setStoryIds(response));
  }, []);

  return (
    <>
      <h1>Hacker News (Reloaded)</h1>
      {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
    </>
  );
};

export default StoriesContainer;
