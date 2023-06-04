export const getCardsAction = (cards) => {
    return {
        type: "GET_CARDS_SUCCESS",
        payload: cards,
    };
};

export const getCardsErrorAction = (error) => {
    return {
        type: "GET_CARDS_ERROR",
        payload: error,
    };
};
