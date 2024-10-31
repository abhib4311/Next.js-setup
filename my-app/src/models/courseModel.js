import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },

}, {
    timestamps: true,
});


const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
