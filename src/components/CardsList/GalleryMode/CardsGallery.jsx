import Card from "./Card.jsx";
import s from "./cardsGallery.module.scss";

function CardsGallery(props) {
    const { btnAssignment, btnText, cards } = props;

    return (
        <section className={s.cards} data-testid="gallery">
            {cards.map((card) => (
                <Card
                    key={card.articul}
                    card={card}
                    btnAssignment={btnAssignment}
                    btnText={btnText}
                />
            ))}
        </section>
    );
}

export default CardsGallery;
