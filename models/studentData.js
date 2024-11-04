const { Router } = require('express');
const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    uuid: {type: String, required: true, unique: true},
    courses: [{type: Schema.Types.ObjectId, ref: "course"}],
    certification: [{type: String}],
    profile: {type: Schema.Types.ObjectId, ref: "profile"},
    role: {type: String, default: "student"}
  })

module.exports = model('student', studentSchema);
