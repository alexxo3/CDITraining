const Course = require('../models/courseData');

// Create a new course
// Unified route for creating a course or class
const createCourseOrClass = async (req, res) => {
    try {
        const {
            instructor_id,
            subject_id,
            category,
            skills,
            price,
            discount,
            level,
            duration,
            language,
            objective,
            prerequisites,
            content,
            has_instructor,
            cohort,
            start_date,
            end_date,
            candidates,
            meeting_link,
            course_id // Optional, only for creating a class from an existing course
        } = req.body;

        const data = {
            instructor_id,
            subject_id,
            category,
            skills,
            price,
            discount,
            level,
            duration,
            language,
            objective,
            prerequisites,
            content,
            has_instructor,
        };

        // Only set with_instructor fields if has_instructor is true (for a class)
        if (has_instructor) {
            data.with_instructor = {
                cohort: cohort || null,
                start_date: start_date || null,
                end_date: end_date || null,
                candidates: candidates || null,
                meeting_link: meeting_link || null,
            };
            data.course_id = course_id || null; // Link to the original course if provided
        }

        const courseOrClass = new Course(data);
        await courseOrClass.save();
        res.status(201).json({ message: has_instructor ? 'Class created successfully' : 'Course created successfully', courseOrClass });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Unified route for getting all courses or classes
const getCoursesOrClasses = async (req, res) => {
    try {
        const { type } = req.query; // Use query parameter to filter
        let filter = {};

        if (type === 'course') {
            filter.has_instructor = false;
        } else if (type === 'class') {
            filter.has_instructor = true;
        }

        const results = await Course.find(filter);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get a single course or class by ID
const getCourseOrClassById = async (req, res) => {
    try {
        const { id } = req.params;
        const courseOrClass = await Course.findById(id);
        if (!courseOrClass) {
            return res.status(404).json({ message: 'Course or class not found' });
        }
        res.status(200).json(courseOrClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a course or class by ID
const updateCourseOrClassById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedCourseOrClass = await Course.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedCourseOrClass) {
            return res.status(404).json({ message: 'Course or class not found' });
        }

        res.status(200).json({ message: 'Course or class updated successfully', updatedCourseOrClass });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a course or class by ID
const deleteCourseOrClassById = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCourseOrClass = await Course.findByIdAndDelete(id);
        if (!deletedCourseOrClass) {
            return res.status(404).json({ message: 'Course or class not found' });
        }

        res.status(200).json({ message: 'Course or class deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCourseOrClass,
    getCoursesOrClasses,
    getCourseOrClassById,
    updateCourseOrClassById,
    deleteCourseOrClassById
};
