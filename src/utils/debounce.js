const debounce = (fn, wait, immediate, args) => {
  let timeout;

  return () => {
    const self = this;
    const callNow = immediate && !timeout;
    const callLater = () => {
      timeout = null;
      if (!immediate) {
        fn.apply(self, args);
      }
    };

    clearTimeout(timeout);
    timeout = setTimeout(callLater, wait);

    if (callNow) {
      fn.apply(self, args);
    }
  };
};

export default debounce;
