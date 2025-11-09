// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  edad: { type: Number, required: true }
});

module.exports = mongoose.model("User", UserSchema);
