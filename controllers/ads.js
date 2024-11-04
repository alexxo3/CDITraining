const ads = require('../models/adsSchema');
const path = require('path');

// Create Ads with uploaded images
const createAds = async (req, res) => {
  try {
    const { expire_date } = req.body; // Extract expire_date from request body
    const imagePaths = req.files.map(file => file.path); // Get paths of uploaded images

    // Create the ad in the database with the full image paths
    const ad = await ads.create({
      image_path: imagePaths,
      expire_date
    });

    // Trim the image paths to only show the filenames
    const trimmedImagePaths = ad.image_path.map(image => path.basename(image));

    // Send the response with the trimmed image paths
    res.status(201).json({
      ...ad.toObject(), // Convert Mongoose document to plain JS object
      image_path: trimmedImagePaths // Replace the full paths with filenames in the response
    });
  } catch (error) {
    console.error('Error creating ad:', error); // Log the error details to the console

    res.status(500).json({
      message: 'Error creating ad',
      error: error.message || 'An unknown error occurred' // Send detailed error message
    });
  }
};


// Get all ads
const getAllAds = async (req, res) => {
  try {
    const allAds = await ads.find();
    res.json(allAds);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ads', error });
  }
};

// Delete Ads
const deleteAds = async (req, res) => {
  try {
    const deletedAds = await ads.findByIdAndDelete(req.params.id);
    if (!deletedAds) {
      return res.status(404).json({ message: 'Ads not found' });
    }
    res.json({ message: 'Ads deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createAds, getAllAds, deleteAds };
