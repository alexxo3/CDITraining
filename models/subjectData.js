const {Schema, model} = require('mongoose');

const subjectSchema = new Schema({
    name: {type: String, required: true, unique: true},
    picture:{type: String, required: true},
    description: {type: String}
});

module.exports = model('subject', subjectSchema);
