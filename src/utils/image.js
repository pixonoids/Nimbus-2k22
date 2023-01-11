export const getImageUrl = (path) => {
  if (path.startsWith('http')) {
    return path;
  } else {
    return `https://api.festnimbus.com${path}`;
  }
};
