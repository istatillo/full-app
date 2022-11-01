const { Schema, model } = require("mongoose");

module.exports = model(
  "User",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  })
);
