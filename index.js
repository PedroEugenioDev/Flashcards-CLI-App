require("./config/database");
const { createDesk, deleteDesk } = require("./controllers/deckController");
const { write, realpath } = require("node:fs");

const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const mainMenuPrompt = `Choose an option:

  1 - Create a new desk
  2 - Delete a desk
  3 - Exit
  
`;

/* function main() {
  let option = "";
  process.stdout.write(mainMenuPrompt);
  process.stdin.on("data", (answer) => {
    process.stdout.write(`Input: ${answer}`);
    option = Number(answer);
    switch (option) {
      case 1:
        process.stdout.write("Você escolher a opção 1");
        //createDesk();
        break;
      case 2:
        process.stdout.write("Você escolher a opção 2");
        // deleteDesk();
        break;
      case 3:
        process.stdout.write("Você escolher a opção 3");
        //console.clear();
        break;
      default:
        process.stdout.write("Você escolheu uma opção inválida");
        break;
    }
  });
} */

function main() {
  readline.question(mainMenuPrompt, (answer) => {
    let option = Number(answer);
    switch (option) {
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
        console.log("Exiting... (Press Enter)");
        process.stdin.on("keypress", (key) => {
          if (key == "\r") {
            console.clear();
            process.exit(0);
          } else {
            console.log("Press enter key");
          }
        });
        break;
      default:
        console.log("Você escolheu uma opção inválida");
        break;
    }
  });
}

main();
