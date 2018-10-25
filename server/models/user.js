// Core
const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        createdDate: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: 'list'
    }
);

module.exports = mongoose.model('User', User);
