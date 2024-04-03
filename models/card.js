const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  front: { type: string },
  back: { type: string },
  DeckId: { type: mongoose.Schema.Types.ObjectId, ref: "deckModel" },
});

module.exports = mongoose.Model("cardModel", cardSchema);
