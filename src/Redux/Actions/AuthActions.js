// user authentication
export const login = () => {
    return {
        type: 'LOGGEDIN',
    };
};
export const logout = () => {
    return {
        type: 'LOGGEDOUT'
    }
}