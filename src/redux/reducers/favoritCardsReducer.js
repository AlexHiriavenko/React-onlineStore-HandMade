const initialState = {
    favoritCards: JSON.parse(localStorage.getItem("favoritsList")) || [],
};

export function favoritCardsReducer(state = initialState, action) {
    switch (action.type) {
        case "FAVORIT_CARDS":
            return {
                ...state,
                favoritCards: action.payload,
            };
        default:
            return state;
    }
}
