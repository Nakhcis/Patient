const mongoose= require('mongoose');

const servicesSchema = new mongoose.Schema({
    user:{ 
        type: String,
        required: true
     },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
         type: String,
         required: true
     },
});

module.exports= mongoose.model('services', servicesSchema);