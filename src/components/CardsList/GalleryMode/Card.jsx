import { useDispatch } from "react-redux";
import s from "./card.module.scss";
import Button from "../../button";
import Star from "../../Star/Star.jsx";
import checkModalContent from "../../modal/checkModalContent";
import useFavoriteCard from "../../../hooks/useFavorit";

function Card(props) {
    const dispatch = useDispatch();
    const { name, price, img, articul, color, quantity, sum } = props.card;
    const { btnText, btnAssignment } = props;

    const { isFavorite, toggleFavorite } = useFavoriteCard(props.card);

    return (
        <div className={s.card} id={articul} data-cards data-testid="card">
            <h2 className={s.text + " " + s.title}>{name}</h2>
            <img src={img} alt={name} width={280} />
            <div className={s.cardContent}>
                <div>
                    <p className={s.text}>
                        <span className={s.prop}>Price:</span>
                        {price}
                    </p>
                    <p className={s.text}>
                        <span className={s.prop}>Articul:</span>
                        {articul}
                    </p>
                    <p className={s.text}>
                        <span className={s.prop}>Color:</span>
                        {color}
                    </p>
                    {quantity && sum && (
                        <>
                            <p>
                                <span className={s.prop}>Quantity:</span>
                                {quantity}
                            </p>
                            <p>
                                <span className={s.prop}>Sum:</span>
                                {sum}
                            </p>
                        </>
                    )}
                </div>
                <div className={s.actions}>
                    <Button
                        text={btnText}
                        assignment={btnAssignment}
                        onClick={(e) => {
                            checkModalContent(e, props.card, dispatch);
                        }}
                    />
                    <div className={s.wrapStar} onClick={toggleFavorite}>
                        <Star fill={isFavorite ? "gold" : "bisque"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
