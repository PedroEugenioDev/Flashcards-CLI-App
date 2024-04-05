const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  front: { type: String },
  back: { type: String },
  DeckId: { type: mongoose.Schema.Types.ObjectId, ref: "deckModel" },
});

module.exports = mongoose.model("cardModel", cardSchema);
