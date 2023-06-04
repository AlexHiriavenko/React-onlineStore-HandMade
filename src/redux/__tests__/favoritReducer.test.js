import { favoritCardsReducer } from "../reducers/favoritCardsReducer";

describe("favoritCardsReducer", () => {
    test("should return the initial state", () => {
        const initialState = {
            favoritCards: [],
        };
        const action = { type: "UNKNOWN_ACTION" };
        const newState = favoritCardsReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });

    test("should handle FAVORIT_CARDS action", () => {
        const initialState = {
            favoritCards: [],
        };
        const newFavoritCards = [
            { articul: 1, name: "Card 1" },
            { articul: 2, name: "Card 2" },
        ];
        const action = { type: "FAVORIT_CARDS", payload: newFavoritCards };
        const newState = favoritCardsReducer(initialState, action);
        expect(newState).toEqual({
            favoritCards: newFavoritCards,
        });
    });
});
