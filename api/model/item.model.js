const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: 'string',
    price: 'string',
    createDate: 'date',
    updatedDate: 'date',
    createdBy: 'string',
    updatedBy: 'string'
},
    { timestamps: { createDate: 'created_at', updatedDate: 'updated_at' } });

const Item = mongoose.model('items', itemSchema);

module.exports = {
    Item
}