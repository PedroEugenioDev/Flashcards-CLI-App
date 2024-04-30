const card = require("../models/card");
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
        DeckId: deckOwner.Id,
      });
      await newCard.save();
    })
    .catch((error) => {
      console.log("Error at createCard function");
    });
}

module.exports = { createCard };
