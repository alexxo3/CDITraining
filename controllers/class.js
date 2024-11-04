const Class = require('../models/classData');

// Create a new class
const createClass = async (req, res) => {
    const classData = new Class(req.body);
    try {
        const newClass = await classData.save();
        res.status(201).json(newClass);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

// Get all classes
const getClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Get a single class
const getClass = async (req, res) => {
    const classData = await Class.findById(req.params.id);
    try {
        if(!classData) {
            return res.status(404).json({message: 'Class not found'});
        }
        res.status(200).json(classData);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Update a class
const updateClass = async (req, res) => {
    try {
        const classData = await Class.findById(req.params.id);
        if(!classData) return res.status(404).json({message: 'Class not found'});

        Object.keys(req.body).forEach(key => {
            classData[key] = req.body[key];
          });

        const updatedClass = await classData.save();
        res.status(200).json(updatedClass);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Delete a class
const deleteClass = async (req, res) => {
    try {
        const classData = await Class.findById(req.params.id);
        if(!classData) return res.status(404).json({message: 'Class not found'});

        await classData.remove();
        res.status(200).json({message: 'Class deleted successfully'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


module.exports = {
    createClass,
    getClasses,
    getClass,
    updateClass,
    deleteClass
}


