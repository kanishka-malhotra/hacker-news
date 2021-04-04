/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { getStoryFromId } from '../../services/api';
import './Story.css';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStoryFromId(storyId).then(data => {
      if (data && data.url) {
        setStory(data);
      }
    });
  }, []);

  return story && story.url ? (
    <div className="story">
      <a href={story.url} className="story__title">{story.title}</a>
      <p>
        <span className="story__by">By:</span> {story.by}
        {` | `}
        <span className="story__time">Posted:</span> {story.time}
      </p>
    </div>
  ) : null;
};

export default Story;
