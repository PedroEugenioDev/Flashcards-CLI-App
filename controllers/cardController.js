const Card = require("../models/card");
const Deck = require("../models/deck");
const inquirer = require("inquirer");
const log = require("cli-block");
const readline = require("readline");

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

async function reviewCards(deckOwner) {
  const cards = await Card.find({ DeckId: deckOwner.id });
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  for (let index = 0; index < cards.length; index++) {
    console.clear();
    log.blockHeader("Front");
    log.blockLine();
    log.blockLine(cards[index].front);
    log.blockMid("Back");
    log.blockLine();
    log.blockFooter();
    let answer = await new Promise(
      async (resolve) =>
        await rl.question("Press S key to show back or B to Back", resolve)
    );
    if (answer === "s") {
      console.clear();
      log.blockHeader("Front");
      log.blockLine();
      log.blockLine(cards[index].front);
      log.blockMid("Back");
      log.blockLine(cards[index].back);
      log.blockFooter();
    }
    let next = await new Promise(
      async (resolve) =>
        await rl.question(
          "Press N key to review next card or B to Back",
          resolve
        )
    );
  }
  rl.close();
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

module.exports = { createCard, deleteCard, reviewCards };
