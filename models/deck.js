const mongoose = require("mongoose");

const deckSchema = mongoose.Schema({
  name: { type: String },
  cards: [{ type: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.model("deckModel", deckSchema);
