const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, require},
    name: { type: String, require},
    manufacturer: { type: String,},
    description: { type: String, require},
    mainPepper: { type: String},
    imageUrl: { type: String},
    heat: { type: Number},
    likes: { type: Number},
    dislikes: { type: Number},
    usersLiked: { type: Array},
    usersDisliked: { type: Array},
});

module.exports = mongoose.model('Sauce', sauceSchema);