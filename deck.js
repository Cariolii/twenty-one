const { cards } = require("./cards");
const { shuffle, randomNumber } = require("./utils");

let deck = []

const shuffleDeck = () => {
    deck = shuffle(deck)
}

const resetDeck = () => {
    deck = cards
    shuffleDeck()
}

const getRandomCard = () => {
    const newDeck = [...deck]
    const position = randomNumber(0, newDeck.length - 1)
    const card = newDeck.splice(position, 1)[0]
    deck = newDeck
    return card
}

resetDeck()

for(let i=0; i<52; i++){
    console.log(getRandomCard(), deck.length);
}