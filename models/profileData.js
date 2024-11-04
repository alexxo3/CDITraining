const {Schema, model} = require('mongoose');

const ProfileSchema = new Schema({
    full_name: {type: String, required: true},
    phone: {type: String, unique: true},
    email: {type: String, required: true, unique: true},
    profile_picture: {type: String, required: true},
    gender: {type: String, enum: ["Male", "Female"], required: true},
    date_of_birth: {type: Date},
    country: {type: String, required: true},
    city: {type: String, required: true},
    about: {type: String},
    uuid: {type: String, required: true},
    role: {type: String, required: true, enum: ["student", "instructor"]},
  });

module.exports = model('profile', ProfileSchema);
