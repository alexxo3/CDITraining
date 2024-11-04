const Subject = require('../models/subjectData');

// Create a new subject
const createSubject = async (req, res) => {
    const subject = new Subject(req.body);
    try {
        const newSubject = await subject.save();
        res.status(201).json(newSubject);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// Get all subjects

const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json(subjects);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Get a single subject
const getSubject = async (req, res) => {
    const subject = await Subject.findById(req.params.id);
    try {
        if(!subject) {
            return res.status(404).json({message: 'Subject not found'});
        }
        res.status(200).json(subject);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Update a subject
const updateSubject = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        if(!subject) return res.status(404).json({message: 'Subject not found'});

        if(req.body.name != null) {
            subject.name = req.body.name;
        }

        if(req.boby.description != null) {
            subject.description = req.body.description;
        }

        const updatedSubject = await subject.save();
        res.status(200).json(updatedSubject);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Delete a subject
const deleteSubject = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        if(!subject) return res.status(404).json({message: 'Subject not found'});

        await subject.remove();
        res.status(204).json({message: 'Subject deleted'});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}


module.exports = {createSubject, getSubjects, getSubject, updateSubject, deleteSubject};
