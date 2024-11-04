const {Schema, model} = require('mongoose');

const categorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String},
});

module.exports = model('category', categorySchema);
