/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { STORY_BATCH_SIZE, TOTAL_STORIES } from '../constants';
import debounce from '../utils/debounce';

const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_BATCH_SIZE);

  const handleScroll = debounce(() => {
    if (
      loading ||
      (window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight
    ) {
      return false;
    }

    setLoading(true);
  }, 200);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_BATCH_SIZE >= TOTAL_STORIES) {
      setCount(TOTAL_STORIES);
    } else {
      setCount(count + STORY_BATCH_SIZE);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    count
  };
};

export default useInfiniteScroll;
