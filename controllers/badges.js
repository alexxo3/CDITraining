const Badges = require('../models/badgesData');

// Create a new badge
const createBadge = async (req, res) => {
    try {
        const newBadge = new Badges(req.body);
        await newBadge.save();
        res.status(201).json(newBadge);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Get all badges
const getAllBadges = async (req, res) => {
    try {
        const badges = await Badges.find();
        res.status(200).json(badges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update a badge by ID
const updateBadge = async (req, res) => {
    try {
        const badge = await Badges.findById(req.params.id);
        if (badge) {
            badge.name = req.body.name || badge.name;
            badge.description = req.body.description || badge.description;
            badge.icon = req.body.icon || badge.icon;

            await badge.save();
            res.status(200).json(badge);
        } else {
            res.status(404).json({ message: 'Badge not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {createBadge, getAllBadges, updateBadge};
