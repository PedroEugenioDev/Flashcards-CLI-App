const deck = require("../models/deck");
const {
  createCard,
  deleteCard,
  reviewCards,
} = require("../controllers/cardController");
const inquirer = require("inquirer");

async function createDesk() {
  console.clear();
  await inquirer
    .prompt({
      type: "input",
      name: "new-deck-name",
      message: "Insert a name for your new deck",
    })
    .then(async (answer) => {
      if (answer["new-deck-name"]) {
        await deck.create({ name: answer["new-deck-name"] });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

async function showDecks() {
  console.clear();
  let decks = await deck.find();
  let listName = [];
  decks.forEach((element) => listName.push(element["name"]));

  await inquirer
    .prompt({
      type: "list",
      name: "deckOption",
      message: "Select a deck:",
      choices: [...listName, "Back"],
    })
    .then(async (answer) => {
      if (answer["deckOption"] === "Back") {
        return;
      }
      await deckMenu(answer["deckOption"]);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function deckMenu(deckName) {
  console.clear();
  await inquirer
    .prompt({
      type: "list",
      name: "deckMenuOption",
      message: `Select an option to ${deckName}:`,
      choices: [
        { name: "Add a card", value: 1 },
        { name: "Review cards", value: 2 },
        { name: "Delete card", value: 3 },
        { name: "Exit", value: 4 },
      ],
    })
    .then(async (answer) => {
      console.clear();
      SelectedDeck = await deck.findOne({ name: deckName });
      switch (answer.deckMenuOption) {
        case 1:
          await createCard(SelectedDeck);
          await deckMenu();
          break;
        case 2:
          await reviewCards(SelectedDeck);
          console.log("Revisou");
          //await deckMenu();
          break;
        case 3:
          await deleteCard(SelectedDeck);
          await deckMenu();
          break;
        case 4:
        // back to mainMenu
        default:
          console.clear();
          console.log("Invalid option... (Press Enter)");
          process.stdin.on("keypress", (key) => {
            console.log({ key });
            if (key == "\r") {
              console.clear();
              main();
            } else {
              console.log("Press enter key");
            }
          });
      }
    })
    .catch(() => {
      console.log("Erroooor at Deck Menu");
    });
}

async function deleteDesk() {
  console.clear();
  let decks = await deck.find();
  let listName = [];
  decks.forEach((element) => listName.push(element["name"]));

  await inquirer
    .prompt({
      type: "list",
      name: "deleteDeckOption",
      message: "Select a deck to delete:",
      choices: [...listName, "Back"],
    })
    .then(async (answer) => {
      if (answer["deleteDeckOption"] === "Back") {
        return;
      }
      await deck.deleteOne({ name: answer["deleteDeckOption"] });
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { createDesk, showDecks, deleteDesk };
