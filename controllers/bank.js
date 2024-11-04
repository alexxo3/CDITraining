const Bank = require('../models/bankInfo');

// Create a new bank account
const createBankAccount = async (req, res) => {
    try {
        // Assuming req.user is set to the authenticated instructor
        const instructorRole = req.user.role;

        const bankData = {
            ...req.body,
            instructor_role: instructorRole // Link the bank data to the instructor
        };

        const bank = new Bank(bankData);
        const savedBank = await bank.save();
        res.status(201).json(savedBank);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message, errors: error.errors });
        }
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get all bank accounts
const getAllBankAccounts = async (req, res) => {
    try {
        const banks = await Bank.find();
        res.json(banks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a bank account by ID
const getBankAccountById = async (req, res) => {
    try {
        const bank = await Bank.findById(req.params.id);
        if (!bank) {
            return res.status(404).json({ message: 'Bank account not found' });
        }
        res.json(bank);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a bank account by ID
const updateBankAccount = async (req, res) => {
    try {
        const bank = await Bank.findByIdAndUpdate(req
            .params.id, req.body, { new: true, runValidators: true });
        if (!bank) {
            return res.status(404).json({ message: 'Bank account not found' });
        }
        res.json(bank);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// Delete a bank account by ID

const deleteBankAccount = async (req, res) => {
    try {
        const bank = await Bank.findByIdAndDelete(req.params.id);
        if (!bank) {
            return res.status(404).json({ message: 'Bank account not found' });
        }
        res.json({ message: 'Bank account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { createBankAccount, getAllBankAccounts, getBankAccountById, updateBankAccount, deleteBankAccount };
