const Enrollment = require('../models/enrollmentsData');

// Create a new enrollment
const createEnrollment = async (req, res) => {
    const enrollment = new Enrollment(req.body);    
    try {
        const newEnrollment = await enrollment.save();
        res.status(201).json(newEnrollment);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

// Get all enrollments
const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find();
        res.status(200).json(enrollments);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Get a single enrollment
const getEnrollment = async (req, res) => {
    const enrollment = await Enrollment.findById(req.params.id);
    try {
        if(!enrollment) {
            return res.status(404).json({message: 'Enrollment not found'});
        }
        res.status(200).json(enrollment);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


// Update an enrollment
const updateEnrollment = async (req, res) => {
    try {
        const enrollment = await Enrollment.findById(req.params.id);
        if(!enrollment) return res.status(404).json({message: 'Enrollment not found'});

        Object.keys(req.body).forEach(key => {
            enrollment[key] = req.body[key];
          });

        const updatedEnrollment = await enrollment.save();
        res.status(200).json(updatedEnrollment);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Delete an enrollment
const deleteEnrollment = async (req, res) => {
    try {
        const enrollment = await Enrollment.findById(req.params.id);
        if(!enrollment) return res.status(404).json({message: 'Enrollment not found'});

        await enrollment.remove();
        res.status(200).json({message: 'Enrollment deleted successfully'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    createEnrollment,
    getEnrollments,
    getEnrollment,
    updateEnrollment,
    deleteEnrollment
}
