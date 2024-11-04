const {Schema, model} = require('mongoose');

const workExperienceSchema = new Schema({
    job_description: {type: String, required: true},
    job_title: {type: String, required: true},
    organization: {type: String, required: true},
    start_date: {type: Date},
    end_date: {type: Date},
    employment_type: {type: String, enum: ['full time', 'contract', 'part time'], required:true},
})


module.exports = model('education', workExperienceSchema);
