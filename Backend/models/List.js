const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {data:Buffer,type: String, required: true},
    age: {type: Number, required: true},
    genre: {type: [String], required: true},
    gender: {type: [String], required: true},
    contact: {type: Number, required: true}
});

module.exports = mongoose.model("list", listSchema);

