export const API_BASE_URL = 'https://balzua-game-deck-server.glitch.me';

export const dateAdded = (a, b) => {
  return new Date(b.dateAdded) - new Date(a.dateAdded);
}

export const dateReleased = (a, b) => {
  return new Date(b.releaseDate) - new Date(a.releaseDate);
}

export const rating = (a, b) => {
  return b.userRating - a.userRating;
}

export const alphabetical = (a, b) => {
  return a.name < b.name ? -1 : 1; 
}

export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};