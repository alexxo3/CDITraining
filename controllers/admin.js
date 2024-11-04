const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminAuth');


const adminSignup = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
      // Check if admin already exists
      let admin = await Admin.findOne({ email });
      if (admin) {
        return res.status(400).json({ message: 'Admin already exists' });
      }

      // Create a new admin instance
      admin = new Admin({
        name,
        email,
        password,
        role
      });
      await admin.save();

      // Create JWT payload
      const payload = {
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role
        },
      };

      // Generate JWT token
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
        if (err) throw err;

        // Send back the token (or redirect as needed)
        res.status(201).json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };


// Admin Login and JWT Generation using email as username
const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
      // Check if admin exists
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ message: 'Admin not found' });
      }

      console.log(`Entered Password: ${password}`);
      console.log(`Stored Hashed Password: ${admin.password}`);
      // Check if password matches
      const isMatch = await bcrypt.compare(password, admin.password);
      console.log(`Password Match: ${isMatch}`);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create JWT payload
      const payload = {
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role
        },
      };

      // Generate JWT token
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
        if (err) throw err;

        // Send back the token (or redirect as needed)
        res.json({ token });
      });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };


// Get Admin Profile
const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id); // Fetch admin using ID from JWT
        res.json(admin); // Return admin data
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Update Admin Profile
const updateAdminProfile = async (req, res) => {
    try {
      const admin = await Admin.findById(req.admin.id);
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }

      admin.email = req.body.email || admin.email;
      admin.name = req.body.name || admin.name;
      admin.role = req.body.role || admin.role;

      const updatedAdmin = await admin.save();
      console.log(`Admin ${req.admin.name} has updated their profile`);
      res.json(updatedAdmin);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  // change password
  const changeAdminPassword = async (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    console.log(req.admin);
    try {
      // Fetch the admin by their ID
      const admin = await Admin.findById(req.admin.id);
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }

      // Verify the old password
      const isMatch = await bcrypt.compare(oldPassword, admin.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Old password is incorrect' });
      }

      // Check if new password matches confirm password
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: 'New password and confirm password do not match' });
      }

      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Update the admin's password
      admin.password = hashedPassword;
      await admin.save();

      // Send success response
      res.json({ message: 'Password successfully changed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };



module.exports = { adminSignup, adminLogin, updateAdminProfile, getAdminProfile, changeAdminPassword };
