const {Schema, model} = require('mongoose');

const ratingSchema = new Schema(
    {
        course_id: {type: Schema.Types.ObjectId, ref: 'course'},
        class_id: {type: Schema.Types.ObjectId, ref: 'class'},
        student_id: {type: Schema.Types.ObjectId, ref: 'student'},
        instructor: { type: Number, min: 1, max: 5, required: true },
        communication: { type: Number, min: 1, max: 5, required: true },
        curriculum: { type: Number, min: 1, max: 5, required: true },
        course: { type: Number, min: 1, max: 5, required: true },
        knowledge: { type: Number, min: 1, max: 5, required: true },
        averageRating: { type: Number }, // Calculated average of the above ratings
        review: { type: String },
        createdAt: { type: Date, default: Date.now },
      }
);
