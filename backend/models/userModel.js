const mongoose= require('mongoose')
const bcrypt= require('bcrypt');
const userSchema= mongoose.Schema({
    name: {
        type : String,
        required : [true, 'Please add a name']
        },
    email: {
        type:String ,
        required:[true,'please enter an email'],
        unique: true
    },  // unique is used to check if the value entered
    password: {
        type: String,
        required:[true,'Please add a password'] 
    },
})
userSchema.methods.hashPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };
  
  userSchema.methods.comparePassword = function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  };

module.exports = mongoose.model('Users', userSchema)