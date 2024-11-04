const {Schema, model} = require('mongoose');

const courseContentData = new Schema({
    course: {type: Schema.Types.ObjectId, ref: 'course'},
    section_title: {type: String, required: true},
    section_duration: {type: Number},
    number_of_lectures: {type: Number},
    course_material: [
        {
        title: {type: String, required: true},
        fileType: {type: String, enum: ['video', 'document']},
        document_file: {type: String, enum: ['link', 'file'], required: true},
        owner_instructor: {type: Schema.Types.ObjectId, ref: 'Instructor'}
    }]
})

module.exports = model('content', courseContentData);
