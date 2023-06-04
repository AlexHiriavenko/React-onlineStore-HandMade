import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import Modal from "../../modal/Modal";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
let store;

afterEach(cleanup);

describe("Modal Content", () => {
    test("контент модального окна соответствует цели - добавить товар в корзину", () => {
        const initialState = {
            modalVisibleReducer: {
                isActiveModal: true,
            },
            selectedCardReducer: {
                btnAssign: "modalAddToCart",
                selectedCard: { articul: 123, price: 10, name: "some book", color: "brown" },
            },
            cartCardsReducer: {
                cartCards: [{ articul: 124, price: 11, name: "other book", color: "brown" }],
            },
        };

        store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        expect(screen.getByTestId("modal")).toBeInTheDocument();

        const header = screen.getByText("Подтверждение действия");
        const body = screen.getByText("Вы действительно хотите добавить этот товар в корзину ?");

        expect(header).toBeInTheDocument();
        expect(body).toBeInTheDocument();
    });

    test("контент модального окна соответствует цели - удалить товар из корзины", () => {
        const initialState = {
            modalVisibleReducer: {
                isActiveModal: true,
            },
            selectedCardReducer: {
                btnAssign: "removeFromCart",
                selectedCard: { articul: 123, price: 10, name: "some book", color: "brown" },
            },
            cartCardsReducer: {
                cartCards: [{ articul: 123, price: 10, name: "some book", color: "brown" }],
            },
        };

        store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        const header = screen.getByText("Подтверждение действия");
        const body = screen.getByText("Вы действительно хотите удалить этот товар из корзины ?");

        expect(header).toBeInTheDocument();
        expect(body).toBeInTheDocument();
    });

    test("контент модального окна соответствует кейсу когда что-то пошло не так", () => {
        const initialState = {
            modalVisibleReducer: {
                isActiveModal: true,
            },
            selectedCardReducer: {
                btnAssign: undefined,
                selectedCard: { id: 1 },
            },
            cartCardsReducer: {
                cartCards: [],
            },
        };

        store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        const header = screen.getByText("Error");
        const body = screen.getByText(
            "no data, try later, please close this modal window - click any button in modal window"
        );

        expect(header).toBeInTheDocument();
        expect(body).toBeInTheDocument();
    });
    test("контент модального окна соответствует цели - очиститить избранное", () => {
        const initialState = {
            modalVisibleReducer: {
                isActiveModal: true,
            },
            selectedCardReducer: {
                btnAssign: "clearAllFavorits",
                selectedCard: { id: 1 },
            },
            cartCardsReducer: {
                cartCards: [],
            },
        };

        store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        const header = screen.getByText("Подтверждение действия");
        const body = screen.getByText("Вы действительно хотите очистить весь список избранного ?");

        expect(header).toBeInTheDocument();
        expect(body).toBeInTheDocument();
    });
});
