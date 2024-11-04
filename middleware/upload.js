const multer = require('multer');
const path = require('path');

// Define storage for the uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Uploads folder
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    // Use the original name or customize the file name
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Initialize upload variable
const upload = multer({ storage });

// Export the upload middleware
module.exports = upload;
