const {Schema, model} = require('mongoose');

const enrollmentSchema = new Schema({
    student_id: {type: Schema.Types.ObjectId, ref: 'student'},
    class_id: {type: Schema.Types.ObjectId, ref: 'class'},
    course_id: {type: Schema.Types.ObjectId, ref: 'course'},
    payment_status: {type: Boolean, required: true},
    enrollment_date: {type: Date, default: Date.now},
    completion_status: {type: String, required: true},
    progress: {type: Number, required: true}
});

module.exports = model('enrollment', enrollmentSchema);
