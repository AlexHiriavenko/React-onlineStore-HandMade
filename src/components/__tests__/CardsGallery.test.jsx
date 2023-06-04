import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CardsGallery from "./../CardsList/GalleryMode/CardsGallery";

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

test("renders CardsGallery component with cards", () => {
    const cards = [
        { articul: 1, title: "Card 1" },
        { articul: 2, title: "Card 2" },
        { articul: 3, title: "Card 3" },
    ];
    const btnAssignment = "modalAddToCart";
    const btnText = "Add to Cart";

    render(
        <Provider store={store}>
            <CardsGallery cards={cards} btnAssignment={btnAssignment} btnText={btnText} />
        </Provider>
    );

    const cardElements = screen.getAllByTestId("card");
    expect(cardElements).toHaveLength(cards.length);
    expect(screen.getByTestId("gallery")).toMatchSnapshot();
});
