const Student = require('../models/studentData');
const Profile = require('../models/profileData');


const createStudent = async (req, res) => {
    try {
        // Create a new profile
        const profile = new Profile(req.body.profile);
        const newProfile = await profile.save();

        // Create a new student
        const student = new Student({
            uuid: req.body.uuid,
            courses: req.body.courses,
            certification: req.body.certification,
            profile: newProfile._id
        });
        const newStudent = await student.save();

        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// get all Students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('profile');
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('profile');
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



const updateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Update student properties
        student.uuid = req.body.uuid;
        student.courses = req.body.courses;
        student.certification = req.body.certification;

        const updatedStudent = await student.save();
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        await student.remove();
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = { createStudent, getStudents, getStudent, updateStudent, deleteStudent };
