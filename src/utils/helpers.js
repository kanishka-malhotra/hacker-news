export const getTimeFromNow = timestamp => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  let value = Math.floor(seconds / 31536000);
  if (value > 1) {
    return `${value} years`;
  }

  value = Math.floor(seconds / 2592000);
  if (value > 1) {
    return `${value} months`;
  }

  value = Math.floor(seconds / 86400);
  if (value > 1) {
    return `${value} days`;
  }

  value = Math.floor(seconds / 3600);
  if (value > 1) {
    return `${value} hours`;
  }

  value = Math.floor(seconds / 60);
  if (value > 1) {
    return `${value} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};
