import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CardsTable from "./../CardsList/TableMode/CardsTable";

const initialState = {
    cartCardsReducer: {
        cartCards: [],
    },
    favoritCardsReducer: {
        favoritCards: [],
    },
};

const mockStore = configureStore();
const store = mockStore(initialState);

test("renders CardsTable component with table content", () => {
    const cards = [
        {
            articul: 1,
            name: "Card 1",
            price: 10,
            color: "Red",
            image: "card1.jpg",
            favorit: false,
            cart: false,
        },
        {
            articul: 2,
            name: "Card 2",
            price: 20,
            color: "Blue",
            image: "card2.jpg",
            favorit: true,
            cart: false,
        },
        {
            articul: 3,
            name: "Card 3",
            price: 30,
            color: "Green",
            image: "card3.jpg",
            favorit: false,
            cart: true,
        },
    ];
    const assignment = "modalAddToCart";

    render(
        <Provider store={store}>
            <CardsTable cards={cards} assignment={assignment} />
        </Provider>
    );

    const tableHeadCells = screen.getAllByRole("columnheader");
    expect(tableHeadCells).toHaveLength(7);

    const tableRowHead = 1;
    const tableBodyRows = screen.getAllByRole("row");
    expect(tableBodyRows).toHaveLength(cards.length + tableRowHead);
    expect(screen.getByRole("table")).toMatchSnapshot();

    // screen.debug();
});
