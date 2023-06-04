const initialState = {
    cards: [],
    error: null,
};

const getCardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARDS_SUCCESS":
            return {
                ...state,
                cards: action.payload,
            };
        case "GET_CARDS_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getCardsReducer;
