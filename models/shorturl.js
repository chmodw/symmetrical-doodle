const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
    url: { type: String, required: true },
    created_date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);