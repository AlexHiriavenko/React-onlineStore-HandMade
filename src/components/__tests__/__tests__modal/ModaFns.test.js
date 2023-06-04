import { cleanup } from "@testing-library/react";

import {
    addToCart,
    removeFromCart,
    clearAllCart,
    clearAllFavorits,
} from "../../modal/modalFunctions/modalFunctions";

afterEach(cleanup);

describe("addToCart", () => {
    test("добавляет карточку в корзину", () => {
        const selectedCard = { articul: "123", price: 10 };
        const cart = [];
        const dispatch = jest.fn();

        addToCart(selectedCard, cart, dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(expect.any(Function)); // проверяем dispatch с middleware
        expect(dispatch).toHaveBeenCalledWith({ type: "IS_VISIBLE_MODAL" });
    });
});

describe("removeFromCart", () => {
    test("удаляет карточку из корзины", () => {
        const card = { articul: "123" };
        const cart = [{ articul: "123" }, { articul: "456" }];
        const dispatch = jest.fn();

        removeFromCart(card, cart, dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(expect.any(Function)); // проверяем dispatch с middleware
        expect(dispatch).toHaveBeenCalledWith({ type: "IS_VISIBLE_MODAL" });
    });
});

describe("clearAllCart", () => {
    test("очищает корзину", () => {
        const card = null;
        const cart = [{ articul: "123" }, { articul: "456" }];
        const dispatch = jest.fn();

        clearAllCart(card, cart, dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(expect.any(Function)); // проверяем dispatch с middleware
        expect(dispatch).toHaveBeenCalledWith({ type: "IS_VISIBLE_MODAL" });
    });
});

describe("clearAllFavorits", () => {
    test("очищает список избранного", () => {
        const card = null;
        const cart = [];
        const dispatch = jest.fn();

        clearAllFavorits(card, cart, dispatch);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(expect.any(Function)); // проверяем dispatch с middleware
        expect(dispatch).toHaveBeenCalledWith({ type: "IS_VISIBLE_MODAL" });
    });
});
