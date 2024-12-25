const mongoose = require('mongoose');

const KpopGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  debutYear: { type: Number, required: true },
  members: { type: Number, required: true },
  fandom: { type: String, required: true },
});

module.exports = mongoose.model('KpopGroup', KpopGroupSchema);
