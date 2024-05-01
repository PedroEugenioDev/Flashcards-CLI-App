const Card = require("../models/card");
const Deck = require("../models/deck");
const inquirer = require("inquirer");

async function createCard(deckOwner) {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "new-card-front",
        message: ["Card Front (Question): "],
      },
      {
        type: "input",
        name: "new-card-back",
        message: ["Card Back (Answer): "],
      },
    ])
    .then(async (inputs) => {
      let newCard = Card({
        front: inputs["new-card-front"],
        back: inputs["new-card-back"],
        DeckId: deckOwner.id,
      });
      await newCard.save();
      let deck = await Deck.findById(deckOwner.id);
      deck.cards.push(newCard);
      await deck.save();
    })
    .catch((error) => {
      console.log("Error at createCard function");
    });
}

async function deleteCard(deckOwner) {
  const cards = await Card.find({ DeckId: deckOwner.id });
  const optionsList = cards.map((element, index) => {
    let option = {
      name: `${index}\t-\t${element.front}  |  ${element.back}`,
      value: element.id,
    };
    return option;
  });
  await inquirer
    .prompt({
      type: "list",
      name: "delete-card",
      message: "Select a card:",
      choices: [...optionsList, "Back"],
    })
    .then(async (answer) => {
      await Card.findByIdAndDelete(answer["delete-card"]);
      let deck = await Deck.findById(deckOwner.id);
      let index = deck.cards.indexOf(answer["delete-card"]);
      deck.cards.splice(index, 1);
      await deck.save();
    })
    .catch((error) => {
      console.log("Error at deleteCard function");
    });
}

module.exports = { createCard, deleteCard };
