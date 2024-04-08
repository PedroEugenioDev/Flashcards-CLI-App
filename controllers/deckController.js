const deck = require("../models/deck");
const inquirer = require("inquirer");

/* const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 */

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
        await inquirer
          .prompt({
            type: "confirm",
            name: "new-deck-confirm",
            message: `Confirm to create ${answer["new-deck-name"]} deck`,
          })
          .then((answer) => {
            if (answer["new-deck-confirm"] === true) {
              deck.create({ name: answer["new-deck-name"] });
            }
          })
          .catch((error) => {
            console.log(error);
          });
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

  await inquirer.prompt({
    type: "list",
    name: "deckOption",
    message: "Select a deck:",
    choices: listName,
  });
}

async function deleteDesk(deskId) {
  /*   console.clear();
  try {
    await deck.findAndDelete(deskId);
    rl.clear();
    rl.write(`Desk sucessfully deleted\n`);
  } catch (error) {
    rl.write(`Failed to delete deck. Erro: ${error}\n`);
  } */
}

module.exports = { createDesk, showDecks, deleteDesk };
