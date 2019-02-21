export const DELETE_GAME = 'DELETE_GAME';
export const deleteGame = id => ({
  type: DELETE_GAME,
  id
});

export const UPDATE_STATUS = 'UPDATE_STATUS';
export const updateStatus = (status, id) => ({
  type: UPDATE_STATUS,
  id,
  status
});

export const FILTER_PLATFORM = 'FILTER_PLATFORM';
export const filterPlatform = platform => ({
  type: FILTER_PLATFORM,
  platform
});

export const UPDATE_RATING = 'UPDATE_RATING';
export const updateRating = (rating, id) => ({
  type: UPDATE_RATING,
  rating,
  id
});