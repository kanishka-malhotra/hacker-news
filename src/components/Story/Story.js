/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { getStoryFromId } from '../../services/api';
import { getTimeFromNow } from '../../utils/helpers';
import './Story.css';

const Story = ({ storyId }) => {
  const [error, setError] = useState(null);
  const [story, setStory] = useState({});

  useEffect(() => {
    getStoryFromId(storyId)
      .then(data => {
        if (data && data.url) {
          setStory(data);
        }
      })
      .catch(() => setError(true));
  }, []);

  return story && story.url ? (
    <div className="story">
      {error ? (
        <div>This story is unavailable right now.</div>
      ) : (
        <>
          <a href={story.url} aria-label="This link will open in the current tab." className="story__title">{story.title}</a>
          <p className="story__meta">
            <span className="story__meta-label">Points:</span> {story.score}
            {` • `}
            <span className="story__meta-label">By:</span> {story.by}
            {` • `}
            <span className="story__meta-label">Posted:</span> {getTimeFromNow(story.time)}
          </p>
        </>
      )}
    </div>
  ) : null;
};

export default Story;
