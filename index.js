const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const express = require('express');
const setupSwagger = require('./swagger');
require('dotenv').config();

const app = express();
app.use(cookieParser());
const subjectRouter = require('./routes/subjectRoute');
const instructorRouter = require('./routes/instructorRoutes');
const courseRouter = require('./routes/courseRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const classRouter = require('./routes/classRoutes');
const courseContentRouter = require('./routes/courseContentRoutes');
const enrollmentRouter = require('./routes/enrollmentRoute');
const studentRouter = require('./routes/studentRoutes');
//const paymentRouter = require('./routes/paymentRoutes');
const badgesRouter = require('./routes/badgesRoute');
const adminRouter = require('./routes/adminRoute');
const adsRouter = require('./routes/adsRoutes');


const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
    dbName: 'CDI24'
});
const db = mongoose.connection;
db.on('open', () => {
    console.log('Connected to database');
});

app.use(express.json());

setupSwagger(app);

app.use('/subjects', subjectRouter);
app.use('/instructors', instructorRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/classes', classRouter);
app.use('/courseContents', courseContentRouter);
app.use('/enrollments', enrollmentRouter);
app.use('/students', studentRouter);
//app.use('/payments', paymentRouter);
app.use('/badges', badgesRouter);
app.use('/admin', adminRouter);
app.use('/ads', adsRouter);

const port = '5000'
app.listen(port, () => {
    console.log('Server is running on port ' + port);
})
