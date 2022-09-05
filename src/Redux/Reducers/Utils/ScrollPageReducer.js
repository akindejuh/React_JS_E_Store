export const ScrollPageReducer = (state = true, action) => {
    switch (action.type) {
        case "SCROLLPAGEON":
            return true;
        case "SCROLLPAGEOFF":
            return false;
        default:
            return state;
    }
}