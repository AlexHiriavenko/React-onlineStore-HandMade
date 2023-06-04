import React, { useContext, useEffect } from "react";
import { ViewModeContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { getCardsMiddleware } from "../../redux/middlewares/getCardsMiddleware";
import CardsDisplayMode from "../../components/CardsList/toggleDisplayMode/CardsDisplayMode";
import CardsGallery from "../../components/CardsList/GalleryMode/CardsGallery";
import CardsTable from "../../components/CardsList/TableMode/CardsTable";

const Home = () => {
    // const viewMode = useSelector((state) => state.viewModeReducer.viewMode);
    const { viewMode } = useContext(ViewModeContext);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardsMiddleware());
    }, [dispatch]);

    const allCards = useSelector((state) => state.getCardsReducer.cards);

    if (allCards.length === 0) {
        return <h2 style={{ textAlign: "center", fontSize: "48px" }}>Loading...</h2>;
    }

    return (
        <>
            <CardsDisplayMode />
            {viewMode === "Table" ? (
                <CardsTable cards={allCards} assignment={"modalAddToCart"} />
            ) : null}
            {viewMode === "Gallery" ? (
                <CardsGallery
                    btnAssignment={"modalAddToCart"}
                    btnText={"add to Cart"}
                    cards={allCards}
                ></CardsGallery>
            ) : null}
        </>
    );
};

export default Home;
