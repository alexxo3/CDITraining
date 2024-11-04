const CourseContent = require('../models/courseContentData');


// Create a new course content
const createCourseContent = async (req, res) => {
    const courseContent = new CourseContent(req.body);

    try {
        const newCourseContent = await courseContent.save();
        res.status(201).json(newCourseContent);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

// Get all course contents
const getCourseContents = async (req, res) => {
    try {
        const courseContents = await CourseContent.find();
        res.status(200).json(courseContents);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Get a single course content
const getCourseContent = async (req, res) => {
    const courseContent = await CourseContent.findById(req.params.id);
    try {
        if(!courseContent) {
            return res.status(404).json({message: 'Course content not found'});
        }
        res.status(200).json(courseContent);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Update a course content
const updateCourseContent = async (req, res) => {
    try {
        const courseContent = await CourseContent.findById(req.params.id);
        if(!courseContent) return res.status(404).json({message: 'Course content not found'});

        Object.keys(req.body).forEach(key => {
            courseContent[key] = req.body[key];
          });

        const updatedCourseContent = await courseContent.save();
        res.status(200).json(updatedCourseContent);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Delete a course content
const deleteCourseContent = async (req, res) => {
    try {
        const courseContent = await CourseContent.findByIdAndDelete(req.params.id);
        if(!courseContent) return res.status(404).json({message: 'Course content not found'});

        res.status(200).json({message: 'Course content deleted successfully'});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    createCourseContent,
    getCourseContents,
    getCourseContent,
    updateCourseContent,
    deleteCourseContent
}
