import {API_BASE_URL, normalizeResponseErrors} from '../tools';

export * from './games';
export * from './auth';
export * from './library';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (content = '') => ({
  type: TOGGLE_MODAL,
  content
})

export const FILTER_PLATFORM = 'FILTER_PLATFORM';
export const filterPlatform = platform => ({
  type: FILTER_PLATFORM,
  platform
});

export const FILTER_ALL = 'FILTER_ALL';
export const filterAll = () => ({
  type: FILTER_ALL
});

export const FILTER_NONE = 'FILTER_NONE';
export const filterNone = () => ({
  type: FILTER_NONE
});

export const SORT_LIBRARY = 'SORT_LIBRARY';
export const sortLibrary = (sortMethod) => ({
  type: SORT_LIBRARY,
  sortMethod
});



