
var mongoose = require('mongoose');

var BusinessCardSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    photo_src: String,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("businessCard", BusinessCardSchema);