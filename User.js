const mongoose = require("mongoose");

const User = new mongoose.Schema({

    ip: String,
    name: String,
    agent: String,
    data: String

}, { timestamps: true })

module.exports = mongoose.model("users", User)