import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoritCardsMiddleware } from "../redux/middlewares/favoritCardsMiddlware";

const useFavoriteCard = (card) => {
    const dispatch = useDispatch();
    const favoritCards = useSelector((state) => state.favoritCardsReducer.favoritCards);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const index = favoritCards.findIndex((f) => f.articul === card.articul);
        setIsFavorite(index !== -1);
    }, [favoritCards, card.articul]);

    const toggleFavorite = () => {
        const index = favoritCards.findIndex((f) => f.articul === card.articul);
        const newFavorites =
            index === -1 ? [...favoritCards, card] : favoritCards.filter((f, i) => i !== index);

        dispatch(favoritCardsMiddleware(newFavorites));
        setIsFavorite((prevState) => !prevState);
    };

    return { isFavorite, toggleFavorite };
};

export default useFavoriteCard;
