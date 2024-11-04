const {Schema, model} = require('mongoose');

const classData = new Schema({
    course_id: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    cohort: { type: Number, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    candidates: { type: Number, required: true },
    meeting_link: { type: String, required: true }
});

module.exports = model('class', classData);
