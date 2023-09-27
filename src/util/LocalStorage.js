const getStoredCardId = () => {
    const storedCardId = localStorage.getItem('cardsId');
    if(storedCardId){
        return JSON.parse(storedCardId)
    }
    else{
        return [];
    }
}

const saveCardsId = (id) => {
    const storedCardId = getStoredCardId();
    const exists = storedCardId.find(cardId => cardId === id);
    if(!exists){
        storedCardId.push(id);
        localStorage.setItem('cardsId', JSON.stringify(storedCardId));
    }
}

export {getStoredCardId, saveCardsId}