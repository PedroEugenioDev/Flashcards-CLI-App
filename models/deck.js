const mongoose = require("mongoose");

const deckSchema = mongoose({
  name: { type: string },
  cards: [{ type: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.Model("deckModel", deckModel);
