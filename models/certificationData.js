const {Schema, model} = require('mongoose')


const certificateSchema = new Schema({
    student_id: {type: Schema.type.ObjectId, ref: 'student'},
    course_id: {type: Schema.type.ObjectId, ref: 'course'},
    issue_date: {type: Date},
    certification_url: {type: String}
})
