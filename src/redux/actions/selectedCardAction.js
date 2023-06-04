export function selectedCardAction(btnAssign, selectedCard) {
    return {
        type: "BTN_ASSIGN",
        payload: { btnAssign, selectedCard },
    };
}
