const Payment = require('../models/paymentData');


// Create a new payment
const createPayment = async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Get all payments
const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a payment by ID
const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a payment by ID
const updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (payment) {
            payment.student_id = req.body.student_id || payment.student_id;
            payment.course_id = req.body.course_id || payment.course_id;
            payment.class_id = req.body.class_id || payment.class_id;
            payment.amount = req.body.amount || payment.amount;
            payment.payment_date = req.body.payment_date || payment.payment_date;
            payment.payment_method = req.body.payment_method || payment.payment_method;
            payment.status = req.body.status || payment.status;

            await payment.save();
            res.status(200).json(payment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
