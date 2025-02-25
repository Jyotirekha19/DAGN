// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     minlength: 3,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+\@.+\..+/, "Please enter a valid email"],
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 6,
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("User", UserSchema);


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
