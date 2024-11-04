const {Schema, model} = require('mongoose');

const courseSchema = new Schema(
    {
        instructor_id: {
          type: Schema.Types.ObjectId,
          ref: "Instructor",
          required: [true, "Instructor is required"],
        },
        subject_id: {
          type: Schema.Types.ObjectId,
          ref: "Subject",
          required: [true, "Subject is required"],
        },
        category: {
          type: Schema.Types.ObjectId,
          ref: "Category",
          required: [true, "Category is required"],
        },
        skills: [{type: String}],
        price: {type: Number, required: true},
        discount: {type: Number},
        level: {
          type: String,
          enum: ["beginner", "intermediate", "advanced"],
          required: [true, "Level is required"],
        },
        Duration: {type: String, }, //required: [true, "Duration is required"]},
        language: {type: String, required: [true, "Language is required"]},
        objective: [{type: String, required: [true, "Objective is required"]}],
        prerequisites: [{type: String, required: true}],
        content: [{type: Schema.Types.ObjectId, ref: "Content"}],
        created_at: {type: Date, default: Date.now},
        updated_at: {type: Date, default: Date.now},
        reviews: [{type: Schema.Types.ObjectId, ref: "Review"}],
        has_instructor: {type: Boolean, required: true},
        is_verified: {type: Boolean, default: false}
      }
)

module.exports = model('course', courseSchema);
