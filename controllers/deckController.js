const Deck = require("../models/deck");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createDesk() {
  rl.clear();
  try {
    rl.question("Insert a new desk name:\n", async (name) => {
      await Deck.create({ name });
      rl.clear();
      rl.write(`${name} desk sucessfully created\n`);
    });
  } catch (error) {
    rl.write(`New deck creation failed. Erro: ${error}\n`);
  }
}

async function deleteDesk(deskId) {
  rl.clear();
  try {
    await Deck.findAndDelete(deskId);
    rl.clear();
    rl.write(`Desk sucessfully deleted\n`);
  } catch (error) {
    rl.write(`Failed to delete deck. Erro: ${error}\n`);
  }
}

module.exports = { createDesk, deleteDesk };
