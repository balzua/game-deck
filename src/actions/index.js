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