require("./config/database");
const { createDesk, deleteDesk } = require("./controllers/deckController");
const inquirer = require("inquirer");

function main() {
  console.clear();
  inquirer
    .prompt({
      type: "list",
      name: "menuOption",
      message: "Select an option:",
      choices: [
        { name: "Create a deck", value: 1 },
        { name: "Delete a deck", value: 2 },
        { name: "Exit", value: 3 },
      ],
    })
    .then(async (answers) => {
      console.clear();
      switch (answers.menuOption) {
        case 1:
          console.log("Você escolher a opção 1");
          //createDesk();
          break;
        case 2:
          console.log("Você escolher a opção 2");
          // deleteDesk();
          break;
        case 3:
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
      console.log("erro no main Menu");
    });
}

main();
