import { auth } from '../../../Configs/Firebase';

export const AuthReducer = (state = auth.currentUser?.uid || null, action) => {
    console.log("authreducer state   " + auth.currentUser?.uid || null);
    switch (action.type) {
        case "LOGGEDIN":
            return auth.currentUser?.uid;
        case "LOGGEDOUT":
            return null;
        default:
            return state;
    }
}