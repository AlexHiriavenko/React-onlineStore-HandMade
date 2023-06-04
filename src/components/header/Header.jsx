import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import s from "./header.module.scss";
import Star from "../Star/Star.jsx";
import CartIcon from "../CartIcon/CartIcon.jsx";
import { homeIcon } from "./homeIcon";

function Header() {
    const favorit = useSelector((state) => state.favoritCardsReducer.favoritCards);
    const cart = useSelector((state) => state.cartCardsReducer.cartCards);
    const cartCounter = cart.reduce((acc, val) => acc + val.quantity, 0);
    return (
        <header className={s.header}>
            <Link to="/">
                <h3 className={s.logo}>
                    Presents <span className={s.logo2}>Shop</span>{" "}
                </h3>
            </Link>
            <nav className={s.nav}>
                <ul className={s["nav-list"]}>
                    <li className={s["nav-item"]}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className={s["nav-item"]}>
                        <NavLink to="/favorit">Favorit</NavLink>
                    </li>
                    <li className={s["nav-item"]}>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.wrapper}>
                <Link to="/">
                    <div className={s.homeIcon}>{homeIcon}</div>
                </Link>
                <div className={s.star}>
                    <Link to="/favorit">
                        <Star fill={"gold"} />
                    </Link>
                    <span data-testid="counterFav">{favorit.length}</span>
                </div>

                <div className={s.cart}>
                    <Link to="/cart">
                        <CartIcon />
                    </Link>
                    <span data-testid="counterCart">{cartCounter}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
