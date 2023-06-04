import React, { useContext } from "react";
import s from "./cardsDisplayMode.module.scss";
import { ViewModeContext } from "../../../App";
// import { useDispatch, useSelector } from "react-redux";
// import viewModeAction from "../../../redux/actions/viewModeAction";

// const dispatch = useDispatch();
// const viewMode = useSelector((state) => state.viewModeReducer.viewMode);

// const switchDisplayMode = (event) => {
//     const selectedDisplayMode = event.target.value;
//     dispatch(viewModeAction(selectedDisplayMode));
// };

// закомиченное для использования Redux вместо useContext

const CardsDisplayMode = () => {
    const { viewMode, changeViewMode } = useContext(ViewModeContext);

    const switchDisplayMode = (event) => {
        const selectedDisplayMode = event.target.value;
        changeViewMode(selectedDisplayMode);
    };

    return (
        <div className={s.cardsView}>
            <label htmlFor="display-mode" className={s.label}>
                Режим отображения:
            </label>
            <select
                id="display-mode"
                value={viewMode}
                className={s.select}
                onChange={switchDisplayMode}
            >
                <option value="Gallery">Галерея</option>
                <option value="Table">Таблица</option>
            </select>
        </div>
    );
};

export default CardsDisplayMode;
