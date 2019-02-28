export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const loadUser = () => {
    return localStorage.getItem('user');
};

export const saveAuthToken = (authToken, user) => {
    try {
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('user', user);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
    } catch (e) {}
};