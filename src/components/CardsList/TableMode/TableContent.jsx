import { useDispatch } from "react-redux";
import Star from "../../Star/Star";
import CartIcon from "../../CartIcon/CartIcon";
import useFavoriteCard from "../../../hooks/useFavorit";
import useCartIcon from "../../../hooks/useCart";
import s from "./cardsTable.module.scss";
import checkModalContent from "../../modal/checkModalContent";

function TableContent(props) {
    const dispatch = useDispatch();
    const { card, assignment } = props;
    const { isFavorite, toggleFavorite } = useFavoriteCard(card);
    const { itemInCart } = useCartIcon(card);
    return (
        <tr>
            <td className={s.tableCell}>{card.articul}</td>
            <td className={s.tableCell + " " + s.smHidden}>{card.name}</td>
            <td className={s.tableCell}>{card.price}</td>
            <td className={s.tableCell + " " + s.smHidden}>{card.color}</td>
            <td className={s.tableCell} style={{ margin: "0 auto" }}>
                <img
                    src={card.img}
                    alt={card.name}
                    width={80}
                    style={{ maxWidth: "95%" }}
                />
            </td>
            {card.quantity && assignment === "removeFromCart" ? (
                <td className={s.tableCell}>{card.quantity}</td>
            ) : null}
            {card.sum && assignment === "removeFromCart" ? (
                <td className={s.tableCell}>{card.sum}</td>
            ) : null}
            <td className={s.tableCell + " " + s.btnGroup}>
                <Star
                    fill={isFavorite ? "gold" : "white"}
                    onClick={toggleFavorite}
                />
            </td>
            <td className={s.tableCell}>
                <div
                    data-assignment={assignment}
                    onClick={(e) => {
                        checkModalContent(e, card, dispatch);
                    }}>
                    {assignment === "modalAddToCart" ? (
                        <CartIcon fill={itemInCart ? "gold" : "white"} />
                    ) : (
                        <div className={s.x}>×</div>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default TableContent;
