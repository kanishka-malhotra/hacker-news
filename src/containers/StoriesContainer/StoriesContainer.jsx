import { useEffect, useState } from 'react';

import Story from '../../components/Story';
import { getTopStoryIds } from '../../services/api';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import './StoriesContainer.css';

const StoriesContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getTopStoryIds()
      .then(response => setStoryIds(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="stories-container">
      <h1>Hacker News (Reloaded)</h1>
      {loading && <div>Loading...</div>}
      {error ? (
        <div>We are unable to fetch the posts right now.</div>
      ) : (
        storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId} />)
      )}
    </section>
  );
};

export default StoriesContainer;
