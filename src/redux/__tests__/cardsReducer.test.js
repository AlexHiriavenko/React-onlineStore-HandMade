import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import getCardsReducer from "../reducers/getCardsReducer";
import { getCardsAction, getCardsErrorAction } from "../actions/getCardsAction";
import { getCardsMiddleware } from "../middlewares/getCardsMiddleware";
import { modalVisibleAction } from "../actions/modalVisibleAction";
import { cleanup } from "@testing-library/react";

const mockStore = configureMockStore([thunk]);

describe("getCardsReducer", () => {
    afterEach(cleanup);

    it("should return the initial state", () => {
        expect(getCardsReducer(undefined, {})).toEqual({
            cards: [],
            error: null,
        });
    });

    it("should handle GET_CARDS_SUCCESS", () => {
        const cards = [
            { articul: 123, name: "card1" },
            { articul: 124, name: "card2" },
        ];
        const action = getCardsAction(cards);
        expect(getCardsReducer(undefined, action)).toEqual({
            cards,
            error: null,
        });
    });

    it("should handle GET_CARDS_ERROR", () => {
        const error = "Error message";
        const action = getCardsErrorAction(error);
        expect(getCardsReducer(undefined, action)).toEqual({
            ...getCardsReducer(undefined, {}),
            error,
        });
    });
});

describe("getCardsMiddleware", () => {
    afterEach(cleanup);
    it("should dispatch GET_CARDS_SUCCESS action on successful fetch", () => {
        const cards = [
            { articul: 123, name: "card1" },
            { articul: 124, name: "card2" },
        ];
        const expectedActions = [getCardsAction(cards)];
        const store = mockStore({});
        // Mock the fetch request
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve(cards),
        });
        return store.dispatch(getCardsMiddleware()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should dispatch GET_CARDS_ERROR and MODAL_VISIBLE actions on fetch error", () => {
        const error = new Error("Error message");
        const expectedActions = [getCardsErrorAction(error), modalVisibleAction()];
        const store = mockStore({});
        // Mock the fetch request
        global.fetch = jest.fn().mockRejectedValue(error);
        return store.dispatch(getCardsMiddleware()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
