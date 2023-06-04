import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ViewModeContext } from "../../App";
import CardsDisplayMode from "../../components/CardsList/toggleDisplayMode/CardsDisplayMode";
import CardsGallery from "../../components/CardsList/GalleryMode/CardsGallery";
import CardsTable from "../../components/CardsList/TableMode/CardsTable";
import Button from "../../components/button/index.jsx";
import checkModalContent from "../../components/modal/checkModalContent.js";
import s from "./favorit.module.scss";

const Favorit = () => {
    const { viewMode } = useContext(ViewModeContext);
    const dispatch = useDispatch();
    // const viewMode = useSelector((state) => state.viewModeReducer.viewMode);
    const favoritCards = useSelector((state) => state.favoritCardsReducer.favoritCards);
    const anyCardInFavorit = favoritCards[0];

    return (
        <>
            {favoritCards.length ? (
                <>
                    <div className={s.optionsGroup}>
                        <Button
                            text={"Clear All"}
                            bg={"bisque"}
                            color={"brown"}
                            onClick={(e) => {
                                checkModalContent(e, anyCardInFavorit, dispatch);
                            }}
                            assignment={"clearAllFavorits"}
                        ></Button>
                        <CardsDisplayMode />
                    </div>
                    {viewMode === "Table" ? (
                        <CardsTable cards={favoritCards} assignment={"modalAddToCart"} />
                    ) : null}
                    {viewMode === "Gallery" ? (
                        <CardsGallery
                            btnAssignment={"modalAddToCart"}
                            btnText={"add to Cart"}
                            cards={favoritCards}
                        ></CardsGallery>
                    ) : null}
                </>
            ) : (
                <h2 className="h2Title" style={{ textAlign: "center", fontStyle: "italic" }}>
                    В избранном пока что ничего нет
                </h2>
            )}
        </>
    );
};

export default Favorit;
