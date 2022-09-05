export const ScreenWidthReducer = (state = window.innerWidth, action) => {
    switch (action.type) {
        case "UPDATEWIDTH":
            return window.innerWidth;
        default:
            return state;
    }
}
