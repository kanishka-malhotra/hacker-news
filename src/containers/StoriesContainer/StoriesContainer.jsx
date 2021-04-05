import { useEffect, useState } from 'react';

import Story from '../../components/Story';
import { getNewStoryIds } from '../../services/api';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import './StoriesContainer.css';


const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getNewStoryIds().then(response => setStoryIds(response));
  }, []);

  return (
    <section className="stories-container">
      <h1>Hacker News (Reloaded)</h1>
      {storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId} />)}
    </section>
  );
};

export default StoriesContainer;
