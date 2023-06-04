import { cartCardsReducer } from "../reducers/cartCardsReducer";

describe("cartCardsReducer", () => {
    test("should return the initial state", () => {
        const initialState = {
            cartCards: [],
        };
        const action = { type: "UNKNOWN_ACTION" };
        const newState = cartCardsReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });

    test("should handle CART_CARDS action", () => {
        const initialState = {
            cartCards: [],
        };
        const newCartCards = [
            { articul: 1, name: "Card 1" },
            { articul: 2, name: "Card 2" },
        ];
        const action = { type: "CART_CARDS", payload: newCartCards };
        const newState = cartCardsReducer(initialState, action);
        expect(newState).toEqual({
            cartCards: newCartCards,
        });
    });
});
