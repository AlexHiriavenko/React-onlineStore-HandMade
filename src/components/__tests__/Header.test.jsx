import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import Header from "../header/Header";

afterEach(cleanup);

const initialState = {
    cartCardsReducer: {
        cartCards: [
            { articul: 1, name: "card1", quantity: 1 },
            { articul: 2, name: "card2", quantity: 2 },
        ],
    },
    favoritCardsReducer: {
        favoritCards: [
            { articul: 1, name: "card1" },
            { articul: 2, name: "card2" },
        ],
    },
};

const mockStore = configureStore();
const store = mockStore(initialState);

test("counter favorits", () => {
    render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );
    const { favoritCards } = initialState.favoritCardsReducer;
    const counterFav = screen.getByTestId("counterFav");
    expect(counterFav).toHaveTextContent(String(favoritCards.length));
});

test("counter cart", () => {
    render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );
    const { cartCards } = initialState.cartCardsReducer;
    const counterCart = screen.getByTestId("counterCart");
    function helper(arr) {
        return String(arr.reduce((sum, card) => sum + card.quantity, 0));
    }
    expect(counterCart).toHaveTextContent(helper(cartCards));
});
