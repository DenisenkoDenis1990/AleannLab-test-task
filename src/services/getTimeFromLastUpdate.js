export const getTimeFromLastUpdate = updatedAt => {
  let currentDate = new Date();
  let updatedDate = new Date(updatedAt);
  let timeFromLastUpdate = Math.round(
    (currentDate - updatedDate) / (1000 * 60 * 60 * 24 * 365)
  );

  return timeFromLastUpdate;
};
