const deck = require("../models/deck");
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
    .then((answer) => {
      if (answer["deckOption"] === "Back") {
        return;
      }
      deckMenu(answer["deckOption"]);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function deckMenu() {}

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
