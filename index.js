require("./config/database");
const {
  createDesk,
  showDecks,
  deleteDesk,
} = require("./controllers/deckController");
const inquirer = require("inquirer");

async function main() {
  console.clear();
  await inquirer
    .prompt({
      type: "list",
      name: "menuOption",
      message: "Select an option:",
      choices: [
        { name: "Create a deck", value: 1 },
        { name: "Show decks", value: 2 },
        { name: "Delete deck", value: 3 },
        { name: "Exit", value: 4 },
      ],
    })
    .then(async (answers) => {
      console.clear();
      switch (answers.menuOption) {
        case 1:
          await createDesk();
          main();
          break;
        case 2:
          await showDecks();
          main();
          break;
        case 3:
          await deleteDesk();
          main();
          break;
        case 4:
          console.clear();
          inquirer
            .prompt([
              {
                type: "confirm",
                name: "exit-confirm",
                message: "Confirm to exit",
              },
            ])
            .then((answer) => {
              if (answer["exit-confirm"] === true) {
                console.clear();
                process.exit();
              } else {
                main();
              }
            })
            .catch((error) => {
              console.log(`${error}`);
            });
          break;
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
      console.log("Error at main() function");
    });
}

main();
