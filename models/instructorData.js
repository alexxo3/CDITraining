
const { Schema, model } = require('mongoose');

const instructorData = new Schema({
    uuid: {type: String, default: true},
    upload_id: [{type: Schema.Types.ObjectId, ref: "identity"}],
    category: {type: Schema.Types.ObjectId, ref: "category"},
    education: [{type: Schema.Types.ObjectId, ref: "education"}],
    skills: {type: String},
    work_experience: [{type: Schema.Types.ObjectId, ref: "work_experience"}],
    certifications: [{type: String}],
    social_links: {
      linkedIn: {type: String, default: null},
      facebook: {type: String, default: null},
      github: {type: String, default: null},
      x: {type: String, default: null},
      instagram: {type: String, default: null},
      whatsapp: {type: String, default: null},
    },
    courses_taught: [{type: Schema.Types.ObjectId, ref: "course"}],
    badges: {type: Schema.Types.ObjectId, ref: "badge"},
    profile: {type: Schema.Types.ObjectId, ref: "profile"},
    role: {type: String, default: "instructor"}
  });

module.exports = model('instructor', instructorData);
