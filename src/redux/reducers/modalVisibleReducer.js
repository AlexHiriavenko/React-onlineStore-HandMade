const initialState = {
    isActiveModal: false,
};

export function modalVisibleReducer(state = initialState, action) {
    switch (action.type) {
        case "IS_VISIBLE_MODAL":
            return { ...state, isActiveModal: !state.isActiveModal };
        default:
            return state;
    }
}
