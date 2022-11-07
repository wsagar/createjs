const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  mobile: string,
});

module.exports = {
  UserSchema,
};
