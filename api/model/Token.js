const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
});

const Token = mongoose.model('tokens', tokenSchema);

module.exports = Token;
