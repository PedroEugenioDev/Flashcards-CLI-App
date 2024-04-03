const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/FlashcardsDB")
  .then(console.log("Database Connected!"))
  .catch((err) => console.log(err));
