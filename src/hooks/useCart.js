import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useCartIcon = (card) => {
    const cart = useSelector((state) => state.cartCardsReducer.cartCards);

    const [itemInCart, setItemInCart] = useState(false);

    useEffect(() => {
        const index = cart.findIndex((с) => с.articul === card.articul);
        setItemInCart(index !== -1);
    }, [cart, card.articul]);

    return { itemInCart, setItemInCart };
};

export default useCartIcon;
