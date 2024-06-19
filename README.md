
# Flashcards-CL-App

## 🎋 Description

A command line application for flashcards. It can be used to study and memorize any text content using only command line. You can create different decks to different matters and fill them with lots of cards.


## 📦 Tech Stack

**Back-end:** Node, Mongoose and MongoDB

## 👩🏽‍🍳 Key Features

- The user can browser thought a main menu to select a action related to decks. it can created a new deck, list all decks, delete a deck or exit the program.
- To created aa new deck is only required to enter a new name and it will be added to database.
- When decks are listed, it is possíble to browser throught them to select one or go back to main menu. 
- If a deck is selected, a menu is displayed to select a options related to its cards. It can created new cards, revies the decks, delete a card or exit the deck and go bak to main menu.
- To create, a card is required to enter a card front text (question) and a back card text (answer).
- Throughtout the reviews, the user sees the card's front and it is asked to select to show card's back or finish review and return to deck menu. When it is select to show card's back, then the answer is display along with the question and after that It is asked to select to go on to next card or return dto deck menu.
 - When a deck review is finished, the progrma return to deck menu.

## 💭 Process

- I started with configuring a connection to database. I created models to deck and card using mongoose.
- I tested some options for command line interface, such as readline and inquirer.
- I created a controller to decks, implementing some features (create, read and delete)
- I created a controller to cards, implementing some features (create and delete) 
- I tested some options for better interface to card reviews, such as CLI--block.
- I finished the card reviews feature. 

## 📚 Learnings

The learning objective of this project was to implement software that was functional using only the command line, to deepen the possibilities of implementing Javascript in Desktop applications through Node.js. The main difficulty with this project was combining a user-friendly interface with a robust command line input system. Some solutions, such as readline and inquirer, were not as efficient due to the callback system. For a very large number of cards, this requires an equally large number of callbacks during revisions, which overflows the memory stack. The solution to this was to implement card reviews using a standard for to iterate the card vector, instead of the card vector's forEach, because this was better to control input-dependent callback calls.
The project also helped to develop a better idea of ​​back-end applications with node, allowing me to see familiarity with my previous experiences with the C language. Perhaps an interesting option would have been to develop the project with a file system first instead of implementing directly in a database. In conclusion, I think Javascript ain't necessarily a good option for CLI applications. Maybe a I should try python for this type of project.

## ✨ Improvement

Refactor the code to better separate implementations from controllers. Currently the project is organized by type, but the idea is to reorganize it by features. For example, currently all the CRUD functions of a feature are in a single controller file, but they separate each CRUD feature in a file within a folder for the cards.

Another necessary improvement is to evaluate the reading of inputs using other tools. It seems opportune to find a solution for continuous reading of command line inputs that does not generate successive callbacks and that can be done within a vector iteration in a non-asynchronous way.

## 🚦 Running the Project

```bash
  git clone git@github.com:PedroEugenioDev/Flashcards-CLI-App.git
  cd Flashcards-CLI-App
  node index
```

## 📸 Video or Image


