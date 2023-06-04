import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import { Cart, Favorit, Home, NotFound } from "./pages/index.js";
import Modal from "./components/modal/Modal.jsx";

export const ViewModeContext = React.createContext();

const App = () => {
    const [viewMode, setViewMode] = useState("Gallery");

    const changeViewMode = (mode) => {
        setViewMode(mode);
    };

    return (
        <ViewModeContext.Provider value={{ viewMode, changeViewMode }}>
            {" "}
            <>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favorit" element={<Favorit />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Modal></Modal>
            </>
        </ViewModeContext.Provider>
    );
};

export default App;
