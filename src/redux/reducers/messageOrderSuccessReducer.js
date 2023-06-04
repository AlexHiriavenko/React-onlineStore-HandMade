const initialState = {
    isVisibleMessage: false,
};

export function messageOrderSuccessReducer(state = initialState, action) {
    switch (action.type) {
        case "IS_VISIBLE_MESSAGE":
            return { ...state, isVisibleMessage: action.payload };
        default:
            return state;
    }
}
