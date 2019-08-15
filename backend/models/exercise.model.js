const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exrxSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Exrx = mongoose.model("Exrx", exrxSchema);

module.exports = Exrx;
