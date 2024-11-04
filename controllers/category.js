const Category = require('../models/categoryData');

// Create a new category
const createCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

// Get all categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Get a single category
const getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);
    try {
        if(!category) {
            return res.status(404).json({message: 'Category not found'});
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Update a category
const updateCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if(!category) return res.status(404).json({message: 'Category not found'});

        Object.keys(req.body).forEach(key => {
            category[key] = req.body[key];
          });

        const updatedCategory = await category.save();
        res.status(200).json(updatedCategory);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Delete a category
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if(!category) return res.status(404).json({message: 'Category not found'});

        await category.delete();
        res.status(200).json({message: 'Category deleted successfully'});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}


module.exports = { createCategory, getCategories, getCategory, updateCategory, deleteCategory };
