const mongoose = require('../db');

const pageSchema = new mongoose.Schema({
    url: String,
    likes: Number,
    title: String,
    created_at: { default: Date.now, type: Date }
});

module.exports = mongoose.model('Page', pageSchema);