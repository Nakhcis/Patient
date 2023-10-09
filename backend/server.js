const express = require ('express')
const dotenv = require('dotenv').config()
const servicesRoutes =  require('./routes/servicesRoutes')
const userRoutes= require('./routes/userRoutes')
const bcrypt = require('bcrypt')
const connectDB= require('./config/db')
const port= process.env.PORT || 5000
const mongoose = require('mongoose');

const app =  express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/services', require('./routes/servicesRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`server started on port ${port}`));
}).catch((error)=>{
    console.log(error);
})
