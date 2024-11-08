const {Schema, model} = require('mongoose');

const badgesSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    icon: {type: String, required: true}
})


module.exports = model('badges', badgesSchema);
