const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'ProdId'
    },
    Nameprod: {
        type: String,
        required: true,
        lowercase: true
    },
    Size: {
        type: String,
        required: true
    },
    Marca: {
        type: String,
        required: true,
        default: false
    },
    Price: {
        type: Number,
        required: true,
        default: false
    },
    Promo: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
});

mongoose.model('Product',ProductSchema);