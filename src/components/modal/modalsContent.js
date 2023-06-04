export function modalsContent() {
    return [
        {
            id: "modalAddToCart",
            headerText: "Подтверждение действия",
            bodyText: "Вы действительно хотите добавить этот товар в корзину ?",
        },

        {
            id: "removeFromCart",
            headerText: "Подтверждение действия",
            bodyText: "Вы действительно хотите удалить этот товар из корзины ?",
        },

        {
            id: "clearAllFavorits",
            headerText: "Подтверждение действия",
            bodyText: "Вы действительно хотите очистить весь список избранного ?",
        },
        {
            id: "clearAllCart",
            headerText: "Подтверждение действия",
            bodyText: "Вы действительно хотите очистить вcю корзину ?",
        },
    ];
}

export function findModalContent(btnAssign, cart, selectedCard) {
    const findModalContent = modalsContent().find((modal) => modal.id === btnAssign) || {
        headerText: "Error",
        bodyText:
            "no data, try later, please close this modal window - click any button in modal window",
    };
    if (
        cart.find(
            (el) => el.articul === selectedCard.articul && findModalContent.id === "modalAddToCart"
        )
    ) {
        findModalContent.bodyText = "такой товар в корзине уже есть, хотите добавить еще один ?";
    }
    return findModalContent;
}
