const Instructor = require('../models/instructorData');
const Profile = require('../models/profileData');


// const createInstructor = async (req, res) => {
//     const { instructorData, profileData } = req.body;

//     try {
//         const instructor = new Instructor(instructorData);
//         const profile = new Profile(profileData);

//         // Save both instructor and profile data
//         const newInstructor = await instructor.save();
//         const newProfile = await profile.save();

//         res.status(201).json({ instructor: newInstructor, profile: newProfile });
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// }

const createInstructor = async (req, res) => {
    try {
        // Create a new profile
        const profile = new Profile(req.body.profile);
        const newProfile = await profile.save();

        // Create a new instructor
        const instructor = new Instructor({
            uuid: req.body.uuid,
            upload_id: req.body.upload_id,
            category: req.body.category,
            education: req.body.education,
            skills: req.body.skills,
            work_experience: req.body.work_experience,
            certifications: req.body.certifications,
            social_links: req.body.social_links,
            courses_taught: req.body.courses_taught,
            badges: req.body.badges,
            profile: newProfile._id,
        });
        const newInstructor = await instructor.save();

        res.status(201).json(newInstructor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//get instructors
const getInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find().populate('profile');
        res.status(200).json(instructors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//get single instructor
const getInstructor = async (req, res) => {
    const { instructorId } = req.params;

    try {
        const instructor = await Instructor.findById(instructorId).populate('profile');
        res.status(200).json(instructor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateInstructor = async (req, res) => {
    const { instructorId } = req.params;
    const { instructorData, profileData } = req.body;

    try {
        // Update instructor and associated profile
        const updatedInstructor = await Instructor.findByIdAndUpdate(instructorId, instructorData, { new: true });
        const updatedProfile = await Profile.findOneAndUpdate({ instructor: instructorId }, profileData, { new: true });

        res.status(200).json({ instructor: updatedInstructor, profile: updatedProfile });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteInstructor = async (req, res) => {
    const { instructorId } = req.params;

    try {
        // Delete instructor and associated profile
        await Instructor.findByIdAndDelete(instructorId);
        await Profile.findOneAndDelete({ instructor: instructorId });

        res.status(200).json({ message: "Instructor deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}



module.exports = { createInstructor, getInstructors, getInstructor, updateInstructor, deleteInstructor };
