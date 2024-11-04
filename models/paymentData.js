const {Schema, model} = require('mongoose');


// Payment Schema
const paymentSchema = new Schema({
    student_id: {type: Schema.Types.ObjectId, ref: 'student'},
    course_id: {type: Schema.Types.ObjectId, ref: 'course'},
    class_id: {type: Schema.Types.ObjectId, ref: 'class'},
    amount: {type: Number, required: true},
    payment_date: {type: Date, default: Date.now},
    payment_method: {type: String, enum: ['credit card', 'debit card', 'paypal', 'stripe'], required: true},
    status: {type: String, enum: ['pending', 'completed', 'failed'], default: 'pending'}
})

module.exports = model('payment', paymentSchema);
