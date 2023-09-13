import s from "./cardsTable.module.scss";
import TableContent from "./TableContent";

const CardsTable = (props) => {
    const { cards, assignment } = props;

    return (
        <div className={s.container}>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th className={s.tableCell}>articul</th>
                        <th className={s.tableCell + " " + s.smHidden}>name</th>
                        <th className={s.tableCell}>price</th>
                        <th className={s.tableCell + " " + s.smHidden}>
                            color
                        </th>
                        <th className={s.tableCell}>image</th>
                        {cards[0].quantity ? (
                            <th className={s.tableCell}>quantity</th>
                        ) : null}
                        {cards[0].sum ? (
                            <th className={s.tableCell}>sum</th>
                        ) : null}
                        <th className={s.tableCell}>favorit</th>
                        <th className={s.tableCell}>cart</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map((card) => (
                        <TableContent
                            key={card.articul}
                            card={card}
                            assignment={assignment}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CardsTable;
