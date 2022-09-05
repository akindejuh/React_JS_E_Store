export const ShowFooterReducer = (state = true, action) => {
    switch (action.type) {
        case "SHOWFOOTER":
            return true;
        case "HIDEFOOTER":
            return false;
        default:
            return state;
    }
}