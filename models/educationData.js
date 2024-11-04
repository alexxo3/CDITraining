const {Schema, model} = require('mongoose');

const educationSchema = new Schema({
    level: {type: String},
    field_of_education: {type: String},
    institution_name: {type: String},
    start_date: Date,
    end_date: Date,
    education_certificate: {type: String}
})


module.exports = model('education', educationSchema);
