const initialState = {
    btnAssign: "",
    selectedCard: {},
};

export function selectedCardReducer(state = initialState, action) {
    switch (action.type) {
        case "BTN_ASSIGN":
            const { btnAssign, selectedCard } = action.payload;
            return { ...state, btnAssign, selectedCard };
        default:
            return state;
    }
}
