const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect("mongodb+srv://anubhavraj11a:test123@cluster0.bqzc3jl.mongodb.net/bookShalaDB");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    issuedBooks: [{
        bookName: String,
    }],
    numberOfIssuedBooks: Number,
    signedIn: Boolean
});

const User = new mongoose.model("User", userSchema);

module.exports = User;